package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchProductsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageToken")
    public String nextPageToken;
    public SearchProductsOutput withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductViewAggregations")
    public java.util.Map<String, ProductViewAggregationValue[]> productViewAggregations;
    public SearchProductsOutput withProductViewAggregations(java.util.Map<String, ProductViewAggregationValue[]> productViewAggregations) {
        this.productViewAggregations = productViewAggregations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductViewSummaries")
    public ProductViewSummary[] productViewSummaries;
    public SearchProductsOutput withProductViewSummaries(ProductViewSummary[] productViewSummaries) {
        this.productViewSummaries = productViewSummaries;
        return this;
    }
}