package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CorrectiveRecommendations
 * This type is used by the correctiveRecommendations container, which is returned if eBay has suggestions for how to correct the given violation.
**/
public class CorrectiveRecommendations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aspectRecommendations")
    public AspectRecommendations[] aspectRecommendations;
    public CorrectiveRecommendations withAspectRecommendations(AspectRecommendations[] aspectRecommendations) {
        this.aspectRecommendations = aspectRecommendations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRecommendation")
    public ProductRecommendation productRecommendation;
    public CorrectiveRecommendations withProductRecommendation(ProductRecommendation productRecommendation) {
        this.productRecommendation = productRecommendation;
        return this;
    }
}