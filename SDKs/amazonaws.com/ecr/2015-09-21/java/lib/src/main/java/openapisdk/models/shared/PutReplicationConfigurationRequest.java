package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutReplicationConfigurationRequest {
    @JsonProperty("replicationConfiguration")
    public ReplicationConfiguration replicationConfiguration;
    public PutReplicationConfigurationRequest withReplicationConfiguration(ReplicationConfiguration replicationConfiguration) {
        this.replicationConfiguration = replicationConfiguration;
        return this;
    }
}