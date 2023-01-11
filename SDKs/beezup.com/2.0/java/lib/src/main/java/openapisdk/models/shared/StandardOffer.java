package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StandardOffer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalClickPrice")
    public Double additionalClickPrice;
    public StandardOffer withAdditionalClickPrice(Double additionalClickPrice) {
        this.additionalClickPrice = additionalClickPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public StandardOffer withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedPrice")
    public Double fixedPrice;
    public StandardOffer withFixedPrice(Double fixedPrice) {
        this.fixedPrice = fixedPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("functionalities")
    public OfferFunctionality[] functionalities;
    public StandardOffer withFunctionalities(OfferFunctionality[] functionalities) {
        this.functionalities = functionalities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedClick")
    public Integer includedClick;
    public StandardOffer withIncludedClick(Integer includedClick) {
        this.includedClick = includedClick;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isMostPopular")
    public Boolean isMostPopular;
    public StandardOffer withIsMostPopular(Boolean isMostPopular) {
        this.isMostPopular = isMostPopular;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isOldOffer")
    public Boolean isOldOffer;
    public StandardOffer withIsOldOffer(Boolean isOldOffer) {
        this.isOldOffer = isOldOffer;
        return this;
    }
    @JsonProperty("links")
    public StandardOfferLinks links;
    public StandardOffer withLinks(StandardOfferLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public StandardOffer withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("offerId")
    public Integer offerId;
    public StandardOffer withOfferId(Integer offerId) {
        this.offerId = offerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public Integer position;
    public StandardOffer withPosition(Integer position) {
        this.position = position;
        return this;
    }
}