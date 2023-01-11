package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NegotiatedPricePolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bestOfferAutoAcceptEnabled")
    public Boolean bestOfferAutoAcceptEnabled;
    public NegotiatedPricePolicy withBestOfferAutoAcceptEnabled(Boolean bestOfferAutoAcceptEnabled) {
        this.bestOfferAutoAcceptEnabled = bestOfferAutoAcceptEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bestOfferAutoDeclineEnabled")
    public Boolean bestOfferAutoDeclineEnabled;
    public NegotiatedPricePolicy withBestOfferAutoDeclineEnabled(Boolean bestOfferAutoDeclineEnabled) {
        this.bestOfferAutoDeclineEnabled = bestOfferAutoDeclineEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bestOfferCounterEnabled")
    public Boolean bestOfferCounterEnabled;
    public NegotiatedPricePolicy withBestOfferCounterEnabled(Boolean bestOfferCounterEnabled) {
        this.bestOfferCounterEnabled = bestOfferCounterEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryId")
    public String categoryId;
    public NegotiatedPricePolicy withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryTreeId")
    public String categoryTreeId;
    public NegotiatedPricePolicy withCategoryTreeId(String categoryTreeId) {
        this.categoryTreeId = categoryTreeId;
        return this;
    }
}