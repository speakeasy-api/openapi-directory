package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetEntitlementsRequest
 * The GetEntitlementsRequest contains parameters for the GetEntitlements operation.
**/
public class GetEntitlementsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filter")
    public java.util.Map<String, String[]> filter;
    public GetEntitlementsRequest withFilter(java.util.Map<String, String[]> filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public GetEntitlementsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetEntitlementsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("ProductCode")
    public String productCode;
    public GetEntitlementsRequest withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
}