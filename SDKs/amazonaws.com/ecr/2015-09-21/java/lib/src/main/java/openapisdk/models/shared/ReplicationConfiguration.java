package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ReplicationConfiguration
 * The replication configuration for a registry.
**/
public class ReplicationConfiguration {
    @JsonProperty("rules")
    public ReplicationRule[] rules;
    public ReplicationConfiguration withRules(ReplicationRule[] rules) {
        this.rules = rules;
        return this;
    }
}