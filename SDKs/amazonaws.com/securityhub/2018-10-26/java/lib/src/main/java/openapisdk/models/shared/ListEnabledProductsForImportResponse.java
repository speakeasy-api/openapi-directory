package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEnabledProductsForImportResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListEnabledProductsForImportResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductSubscriptions")
    public String[] productSubscriptions;
    public ListEnabledProductsForImportResponse withProductSubscriptions(String[] productSubscriptions) {
        this.productSubscriptions = productSubscriptions;
        return this;
    }
}