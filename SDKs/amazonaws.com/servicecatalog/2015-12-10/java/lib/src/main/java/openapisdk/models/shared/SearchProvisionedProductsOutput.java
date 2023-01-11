package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchProvisionedProductsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageToken")
    public String nextPageToken;
    public SearchProvisionedProductsOutput withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisionedProducts")
    public ProvisionedProductAttribute[] provisionedProducts;
    public SearchProvisionedProductsOutput withProvisionedProducts(ProvisionedProductAttribute[] provisionedProducts) {
        this.provisionedProducts = provisionedProducts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalResultsCount")
    public Long totalResultsCount;
    public SearchProvisionedProductsOutput withTotalResultsCount(Long totalResultsCount) {
        this.totalResultsCount = totalResultsCount;
        return this;
    }
}