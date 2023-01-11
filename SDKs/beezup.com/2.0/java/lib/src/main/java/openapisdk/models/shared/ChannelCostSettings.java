package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelCostSettings
 * Indicate the default configuration of the cost on this channel.
**/
public class ChannelCostSettings {
    @JsonProperty("costType")
    public CostTypeEnum costType;
    public ChannelCostSettings withCostType(CostTypeEnum costType) {
        this.costType = costType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("globalCostValue")
    public Double globalCostValue;
    public ChannelCostSettings withGlobalCostValue(Double globalCostValue) {
        this.globalCostValue = globalCostValue;
        return this;
    }
}