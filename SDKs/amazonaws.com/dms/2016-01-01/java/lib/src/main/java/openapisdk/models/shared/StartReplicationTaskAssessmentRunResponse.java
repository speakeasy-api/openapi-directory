package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartReplicationTaskAssessmentRunResponse
 * <p/>
**/
public class StartReplicationTaskAssessmentRunResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTaskAssessmentRun")
    public ReplicationTaskAssessmentRun replicationTaskAssessmentRun;
    public StartReplicationTaskAssessmentRunResponse withReplicationTaskAssessmentRun(ReplicationTaskAssessmentRun replicationTaskAssessmentRun) {
        this.replicationTaskAssessmentRun = replicationTaskAssessmentRun;
        return this;
    }
}