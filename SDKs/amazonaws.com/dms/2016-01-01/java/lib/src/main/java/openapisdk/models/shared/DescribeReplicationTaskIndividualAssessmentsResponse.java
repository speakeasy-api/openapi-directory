package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeReplicationTaskIndividualAssessmentsResponse
 * <p/>
**/
public class DescribeReplicationTaskIndividualAssessmentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public DescribeReplicationTaskIndividualAssessmentsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTaskIndividualAssessments")
    public ReplicationTaskIndividualAssessment[] replicationTaskIndividualAssessments;
    public DescribeReplicationTaskIndividualAssessmentsResponse withReplicationTaskIndividualAssessments(ReplicationTaskIndividualAssessment[] replicationTaskIndividualAssessments) {
        this.replicationTaskIndividualAssessments = replicationTaskIndividualAssessments;
        return this;
    }
}