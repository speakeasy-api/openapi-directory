package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CancelReplicationTaskAssessmentRunResponse
 * <p/>
**/
public class CancelReplicationTaskAssessmentRunResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTaskAssessmentRun")
    public ReplicationTaskAssessmentRun replicationTaskAssessmentRun;
    public CancelReplicationTaskAssessmentRunResponse withReplicationTaskAssessmentRun(ReplicationTaskAssessmentRun replicationTaskAssessmentRun) {
        this.replicationTaskAssessmentRun = replicationTaskAssessmentRun;
        return this;
    }
}