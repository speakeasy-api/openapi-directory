package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutReplicationConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicationConfiguration")
    public ReplicationConfiguration replicationConfiguration;
    public PutReplicationConfigurationResponse withReplicationConfiguration(ReplicationConfiguration replicationConfiguration) {
        this.replicationConfiguration = replicationConfiguration;
        return this;
    }
}