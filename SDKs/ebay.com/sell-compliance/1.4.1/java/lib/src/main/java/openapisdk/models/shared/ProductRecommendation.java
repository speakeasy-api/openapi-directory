package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProductRecommendation
 * This type is used by the productRecommendation container, which is returned if eBay has found an eBay catalog product that may be a match for the product (or product variation) that has a listing violation. Note: eBay catalog product adoption is not enforced at this time, so product adoption violations are no longer returned. Due to this fact, this type and productRecommendation container are not currently applicable.
**/
public class ProductRecommendation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("epid")
    public String epid;
    public ProductRecommendation withEpid(String epid) {
        this.epid = epid;
        return this;
    }
}