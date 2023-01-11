package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StartReplicationTaskAssessmentMessage
 * <p/>
**/
public class StartReplicationTaskAssessmentMessage {
    @JsonProperty("ReplicationTaskArn")
    public String replicationTaskArn;
    public StartReplicationTaskAssessmentMessage withReplicationTaskArn(String replicationTaskArn) {
        this.replicationTaskArn = replicationTaskArn;
        return this;
    }
}