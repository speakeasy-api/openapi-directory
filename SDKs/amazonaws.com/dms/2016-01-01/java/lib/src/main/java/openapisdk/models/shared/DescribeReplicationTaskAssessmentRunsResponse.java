package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeReplicationTaskAssessmentRunsResponse
 * <p/>
**/
public class DescribeReplicationTaskAssessmentRunsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public DescribeReplicationTaskAssessmentRunsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTaskAssessmentRuns")
    public ReplicationTaskAssessmentRun[] replicationTaskAssessmentRuns;
    public DescribeReplicationTaskAssessmentRunsResponse withReplicationTaskAssessmentRuns(ReplicationTaskAssessmentRun[] replicationTaskAssessmentRuns) {
        this.replicationTaskAssessmentRuns = replicationTaskAssessmentRuns;
        return this;
    }
}