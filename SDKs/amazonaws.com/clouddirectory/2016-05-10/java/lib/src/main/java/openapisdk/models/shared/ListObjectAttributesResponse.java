package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListObjectAttributesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public AttributeKeyAndValue[] attributes;
    public ListObjectAttributesResponse withAttributes(AttributeKeyAndValue[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListObjectAttributesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}