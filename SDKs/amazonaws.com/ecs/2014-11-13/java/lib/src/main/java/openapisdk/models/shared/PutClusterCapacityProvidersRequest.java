package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutClusterCapacityProvidersRequest {
    @JsonProperty("capacityProviders")
    public String[] capacityProviders;
    public PutClusterCapacityProvidersRequest withCapacityProviders(String[] capacityProviders) {
        this.capacityProviders = capacityProviders;
        return this;
    }
    @JsonProperty("cluster")
    public String cluster;
    public PutClusterCapacityProvidersRequest withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonProperty("defaultCapacityProviderStrategy")
    public CapacityProviderStrategyItem[] defaultCapacityProviderStrategy;
    public PutClusterCapacityProvidersRequest withDefaultCapacityProviderStrategy(CapacityProviderStrategyItem[] defaultCapacityProviderStrategy) {
        this.defaultCapacityProviderStrategy = defaultCapacityProviderStrategy;
        return this;
    }
}