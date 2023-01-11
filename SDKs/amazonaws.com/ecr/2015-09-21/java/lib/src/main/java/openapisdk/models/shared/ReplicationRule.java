package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ReplicationRule
 * An array of objects representing the replication destinations for a replication configuration. A replication configuration may contain only one replication rule but the rule may contain one or more replication destinations.
**/
public class ReplicationRule {
    @JsonProperty("destinations")
    public ReplicationDestination[] destinations;
    public ReplicationRule withDestinations(ReplicationDestination[] destinations) {
        this.destinations = destinations;
        return this;
    }
}