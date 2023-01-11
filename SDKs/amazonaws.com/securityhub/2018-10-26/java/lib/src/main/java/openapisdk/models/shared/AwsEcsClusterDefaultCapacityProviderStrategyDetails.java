package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsClusterDefaultCapacityProviderStrategyDetails
 * The default capacity provider strategy for the cluster. The default capacity provider strategy is used when services or tasks are run without a specified launch type or capacity provider strategy.
**/
public class AwsEcsClusterDefaultCapacityProviderStrategyDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Base")
    public Long base;
    public AwsEcsClusterDefaultCapacityProviderStrategyDetails withBase(Long base) {
        this.base = base;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CapacityProvider")
    public String capacityProvider;
    public AwsEcsClusterDefaultCapacityProviderStrategyDetails withCapacityProvider(String capacityProvider) {
        this.capacityProvider = capacityProvider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Weight")
    public Long weight;
    public AwsEcsClusterDefaultCapacityProviderStrategyDetails withWeight(Long weight) {
        this.weight = weight;
        return this;
    }
}