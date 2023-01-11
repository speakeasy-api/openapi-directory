package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MarketingRecommendation
 * A complex type that contains information about how a seller can improve their listing configurations. The AD object contains Promoted Listings recommendations and information, which the seller can use to improve buyer conversions. The response can also contain an optional message about the returned data.
**/
public class MarketingRecommendation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ad")
    public Ad ad;
    public MarketingRecommendation withAd(Ad ad) {
        this.ad = ad;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public MarketingRecommendation withMessage(String message) {
        this.message = message;
        return this;
    }
}