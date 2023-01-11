package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MarketingPrice
 * A type that describes the seller discount.
**/
public class MarketingPrice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountAmount")
    public Amount discountAmount;
    public MarketingPrice withDiscountAmount(Amount discountAmount) {
        this.discountAmount = discountAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountPercentage")
    public String discountPercentage;
    public MarketingPrice withDiscountPercentage(String discountPercentage) {
        this.discountPercentage = discountPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalPrice")
    public Amount originalPrice;
    public MarketingPrice withOriginalPrice(Amount originalPrice) {
        this.originalPrice = originalPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceTreatment")
    public String priceTreatment;
    public MarketingPrice withPriceTreatment(String priceTreatment) {
        this.priceTreatment = priceTreatment;
        return this;
    }
}