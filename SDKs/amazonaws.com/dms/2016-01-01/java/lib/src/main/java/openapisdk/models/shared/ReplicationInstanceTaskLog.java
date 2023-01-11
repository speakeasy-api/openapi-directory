package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReplicationInstanceTaskLog
 * Contains metadata for a replication instance task log.
**/
public class ReplicationInstanceTaskLog {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationInstanceTaskLogSize")
    public Long replicationInstanceTaskLogSize;
    public ReplicationInstanceTaskLog withReplicationInstanceTaskLogSize(Long replicationInstanceTaskLogSize) {
        this.replicationInstanceTaskLogSize = replicationInstanceTaskLogSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTaskArn")
    public String replicationTaskArn;
    public ReplicationInstanceTaskLog withReplicationTaskArn(String replicationTaskArn) {
        this.replicationTaskArn = replicationTaskArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTaskName")
    public String replicationTaskName;
    public ReplicationInstanceTaskLog withReplicationTaskName(String replicationTaskName) {
        this.replicationTaskName = replicationTaskName;
        return this;
    }
}