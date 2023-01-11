package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteReplicationTaskAssessmentRunResponse
 * <p/>
**/
public class DeleteReplicationTaskAssessmentRunResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTaskAssessmentRun")
    public ReplicationTaskAssessmentRun replicationTaskAssessmentRun;
    public DeleteReplicationTaskAssessmentRunResponse withReplicationTaskAssessmentRun(ReplicationTaskAssessmentRun replicationTaskAssessmentRun) {
        this.replicationTaskAssessmentRun = replicationTaskAssessmentRun;
        return this;
    }
}