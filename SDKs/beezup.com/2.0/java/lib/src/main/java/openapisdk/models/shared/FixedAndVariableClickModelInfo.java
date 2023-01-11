package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * FixedAndVariableClickModelInfo
 * Internal usage: Old offer type. Describe the fix and variable model information
**/
public class FixedAndVariableClickModelInfo {
    @JsonProperty("clickIncludedAndAdditionalClickPrices")
    public ClickIncludedAndAdditionalClickPrice[] clickIncludedAndAdditionalClickPrices;
    public FixedAndVariableClickModelInfo withClickIncludedAndAdditionalClickPrices(ClickIncludedAndAdditionalClickPrice[] clickIncludedAndAdditionalClickPrices) {
        this.clickIncludedAndAdditionalClickPrices = clickIncludedAndAdditionalClickPrices;
        return this;
    }
}