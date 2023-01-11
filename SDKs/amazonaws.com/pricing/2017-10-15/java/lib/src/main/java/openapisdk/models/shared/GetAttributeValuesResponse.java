package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAttributeValuesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributeValues")
    public AttributeValue[] attributeValues;
    public GetAttributeValuesResponse withAttributeValues(AttributeValue[] attributeValues) {
        this.attributeValues = attributeValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetAttributeValuesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}