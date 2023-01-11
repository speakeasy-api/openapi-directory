package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BuyRecommendationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyRecommendations")
    public String[] buyRecommendations;
    public BuyRecommendationResponse withBuyRecommendations(String[] buyRecommendations) {
        this.buyRecommendations = buyRecommendations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfProducts")
    public Long numberOfProducts;
    public BuyRecommendationResponse withNumberOfProducts(Long numberOfProducts) {
        this.numberOfProducts = numberOfProducts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseMessage")
    public String responseMessage;
    public BuyRecommendationResponse withResponseMessage(String responseMessage) {
        this.responseMessage = responseMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseStatus")
    public String responseStatus;
    public BuyRecommendationResponse withResponseStatus(String responseStatus) {
        this.responseStatus = responseStatus;
        return this;
    }
}