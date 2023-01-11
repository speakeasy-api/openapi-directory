package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ReplicationDestination
 * An array of objects representing the details of a replication destination.
**/
public class ReplicationDestination {
    @JsonProperty("region")
    public String region;
    public ReplicationDestination withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonProperty("registryId")
    public String registryId;
    public ReplicationDestination withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
}