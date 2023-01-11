package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CancelReplicationTaskAssessmentRunMessage
 * <p/>
**/
public class CancelReplicationTaskAssessmentRunMessage {
    @JsonProperty("ReplicationTaskAssessmentRunArn")
    public String replicationTaskAssessmentRunArn;
    public CancelReplicationTaskAssessmentRunMessage withReplicationTaskAssessmentRunArn(String replicationTaskAssessmentRunArn) {
        this.replicationTaskAssessmentRunArn = replicationTaskAssessmentRunArn;
        return this;
    }
}