package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ClickIncludedAndVariablePrice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickIncluded")
    public Integer clickIncluded;
    public ClickIncludedAndVariablePrice withClickIncluded(Integer clickIncluded) {
        this.clickIncluded = clickIncluded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variablePrice")
    public Double variablePrice;
    public ClickIncludedAndVariablePrice withVariablePrice(Double variablePrice) {
        this.variablePrice = variablePrice;
        return this;
    }
}