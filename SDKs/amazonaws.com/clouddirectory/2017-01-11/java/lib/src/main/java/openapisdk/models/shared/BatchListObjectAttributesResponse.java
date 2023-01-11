package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchListObjectAttributesResponse
 * Represents the output of a <a>ListObjectAttributes</a> response operation.
**/
public class BatchListObjectAttributesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public AttributeKeyAndValue[] attributes;
    public BatchListObjectAttributesResponse withAttributes(AttributeKeyAndValue[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public BatchListObjectAttributesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}