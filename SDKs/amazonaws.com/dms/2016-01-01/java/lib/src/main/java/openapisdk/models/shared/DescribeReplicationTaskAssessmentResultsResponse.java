package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeReplicationTaskAssessmentResultsResponse
 * <p/>
**/
public class DescribeReplicationTaskAssessmentResultsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BucketName")
    public String bucketName;
    public DescribeReplicationTaskAssessmentResultsResponse withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public DescribeReplicationTaskAssessmentResultsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTaskAssessmentResults")
    public ReplicationTaskAssessmentResult[] replicationTaskAssessmentResults;
    public DescribeReplicationTaskAssessmentResultsResponse withReplicationTaskAssessmentResults(ReplicationTaskAssessmentResult[] replicationTaskAssessmentResults) {
        this.replicationTaskAssessmentResults = replicationTaskAssessmentResults;
        return this;
    }
}