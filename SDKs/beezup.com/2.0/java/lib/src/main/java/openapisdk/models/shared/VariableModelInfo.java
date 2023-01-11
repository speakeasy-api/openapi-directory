package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VariableModelInfo
 * Internal usage: Old offer type. Describe the fix and variable model information
**/
public class VariableModelInfo {
    @JsonProperty("clickIncludedAndVariablePrices")
    public ClickIncludedAndVariablePrice[] clickIncludedAndVariablePrices;
    public VariableModelInfo withClickIncludedAndVariablePrices(ClickIncludedAndVariablePrice[] clickIncludedAndVariablePrices) {
        this.clickIncludedAndVariablePrices = clickIncludedAndVariablePrices;
        return this;
    }
    @JsonProperty("overflowClickCount")
    public Integer overflowClickCount;
    public VariableModelInfo withOverflowClickCount(Integer overflowClickCount) {
        this.overflowClickCount = overflowClickCount;
        return this;
    }
    @JsonProperty("overflowClickPrice")
    public Double overflowClickPrice;
    public VariableModelInfo withOverflowClickPrice(Double overflowClickPrice) {
        this.overflowClickPrice = overflowClickPrice;
        return this;
    }
}