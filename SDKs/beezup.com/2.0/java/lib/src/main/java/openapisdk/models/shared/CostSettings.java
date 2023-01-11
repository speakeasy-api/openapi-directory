package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CostSettings
 * If this property is not indicated please force the user to configure the cost settings.
 * Defines the cost type you have on this channel with the cost value.
 * 
**/
public class CostSettings {
    @JsonProperty("costType")
    public CostTypeEnum costType;
    public CostSettings withCostType(CostTypeEnum costType) {
        this.costType = costType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("globalCostValue")
    public Double globalCostValue;
    public CostSettings withGlobalCostValue(Double globalCostValue) {
        this.globalCostValue = globalCostValue;
        return this;
    }
}