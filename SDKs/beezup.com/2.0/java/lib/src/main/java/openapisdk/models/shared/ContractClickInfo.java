package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContractClickInfo
 * Describe the click information related to the offer.
**/
public class ContractClickInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalClickPrice")
    public Double additionalClickPrice;
    public ContractClickInfo withAdditionalClickPrice(Double additionalClickPrice) {
        this.additionalClickPrice = additionalClickPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickIncluded")
    public Integer clickIncluded;
    public ContractClickInfo withClickIncluded(Integer clickIncluded) {
        this.clickIncluded = clickIncluded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initialOfferClickIncluded")
    public Integer initialOfferClickIncluded;
    public ContractClickInfo withInitialOfferClickIncluded(Integer initialOfferClickIncluded) {
        this.initialOfferClickIncluded = initialOfferClickIncluded;
        return this;
    }
}