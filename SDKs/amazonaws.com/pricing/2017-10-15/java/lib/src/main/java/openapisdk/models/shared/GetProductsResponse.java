package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetProductsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FormatVersion")
    public String formatVersion;
    public GetProductsResponse withFormatVersion(String formatVersion) {
        this.formatVersion = formatVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetProductsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PriceList")
    public String[] priceList;
    public GetProductsResponse withPriceList(String[] priceList) {
        this.priceList = priceList;
        return this;
    }
}