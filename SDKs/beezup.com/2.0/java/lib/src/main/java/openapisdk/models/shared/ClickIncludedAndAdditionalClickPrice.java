package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ClickIncludedAndAdditionalClickPrice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalClickPrice")
    public Double additionalClickPrice;
    public ClickIncludedAndAdditionalClickPrice withAdditionalClickPrice(Double additionalClickPrice) {
        this.additionalClickPrice = additionalClickPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickIncluded")
    public Integer clickIncluded;
    public ClickIncludedAndAdditionalClickPrice withClickIncluded(Integer clickIncluded) {
        this.clickIncluded = clickIncluded;
        return this;
    }
}