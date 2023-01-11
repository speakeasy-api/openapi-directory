package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAttributeValuesRequest {
    @JsonProperty("AttributeName")
    public String attributeName;
    public GetAttributeValuesRequest withAttributeName(String attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public GetAttributeValuesRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetAttributeValuesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("ServiceCode")
    public String serviceCode;
    public GetAttributeValuesRequest withServiceCode(String serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
}