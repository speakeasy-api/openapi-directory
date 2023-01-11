package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CapacityProviderStrategyItem
 * The details of a capacity provider strategy. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CapacityProviderStrategyItem.html">CapacityProviderStrategyItem</a> in the Amazon ECS API Reference.
**/
public class CapacityProviderStrategyItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("base")
    public Long base;
    public CapacityProviderStrategyItem withBase(Long base) {
        this.base = base;
        return this;
    }
    @JsonProperty("capacityProvider")
    public String capacityProvider;
    public CapacityProviderStrategyItem withCapacityProvider(String capacityProvider) {
        this.capacityProvider = capacityProvider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Long weight;
    public CapacityProviderStrategyItem withWeight(Long weight) {
        this.weight = weight;
        return this;
    }
}