package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteReplicationTaskAssessmentRunMessage
 * <p/>
**/
public class DeleteReplicationTaskAssessmentRunMessage {
    @JsonProperty("ReplicationTaskAssessmentRunArn")
    public String replicationTaskAssessmentRunArn;
    public DeleteReplicationTaskAssessmentRunMessage withReplicationTaskAssessmentRunArn(String replicationTaskAssessmentRunArn) {
        this.replicationTaskAssessmentRunArn = replicationTaskAssessmentRunArn;
        return this;
    }
}