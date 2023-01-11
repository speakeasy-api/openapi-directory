package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScanProvisionedProductsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageToken")
    public String nextPageToken;
    public ScanProvisionedProductsOutput withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisionedProducts")
    public ProvisionedProductDetail[] provisionedProducts;
    public ScanProvisionedProductsOutput withProvisionedProducts(ProvisionedProductDetail[] provisionedProducts) {
        this.provisionedProducts = provisionedProducts;
        return this;
    }
}