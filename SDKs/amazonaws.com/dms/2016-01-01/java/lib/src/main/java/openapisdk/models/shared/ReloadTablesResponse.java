package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReloadTablesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTaskArn")
    public String replicationTaskArn;
    public ReloadTablesResponse withReplicationTaskArn(String replicationTaskArn) {
        this.replicationTaskArn = replicationTaskArn;
        return this;
    }
}