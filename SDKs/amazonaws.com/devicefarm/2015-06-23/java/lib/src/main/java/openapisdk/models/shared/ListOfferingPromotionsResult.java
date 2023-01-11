package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListOfferingPromotionsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListOfferingPromotionsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offeringPromotions")
    public OfferingPromotion[] offeringPromotions;
    public ListOfferingPromotionsResult withOfferingPromotions(OfferingPromotion[] offeringPromotions) {
        this.offeringPromotions = offeringPromotions;
        return this;
    }
}