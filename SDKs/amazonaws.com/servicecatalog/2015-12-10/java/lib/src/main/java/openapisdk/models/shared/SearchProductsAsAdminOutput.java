package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchProductsAsAdminOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageToken")
    public String nextPageToken;
    public SearchProductsAsAdminOutput withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductViewDetails")
    public ProductViewDetail[] productViewDetails;
    public SearchProductsAsAdminOutput withProductViewDetails(ProductViewDetail[] productViewDetails) {
        this.productViewDetails = productViewDetails;
        return this;
    }
}