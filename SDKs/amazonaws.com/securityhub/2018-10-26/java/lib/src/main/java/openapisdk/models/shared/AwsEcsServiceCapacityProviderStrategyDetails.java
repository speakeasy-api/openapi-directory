package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsServiceCapacityProviderStrategyDetails
 * Strategy item for the capacity provider strategy that the service uses.
**/
public class AwsEcsServiceCapacityProviderStrategyDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Base")
    public Long base;
    public AwsEcsServiceCapacityProviderStrategyDetails withBase(Long base) {
        this.base = base;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CapacityProvider")
    public String capacityProvider;
    public AwsEcsServiceCapacityProviderStrategyDetails withCapacityProvider(String capacityProvider) {
        this.capacityProvider = capacityProvider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Weight")
    public Long weight;
    public AwsEcsServiceCapacityProviderStrategyDetails withWeight(Long weight) {
        this.weight = weight;
        return this;
    }
}