package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchGetLinkAttributesResponse
 * Represents the output of a <a>GetLinkAttributes</a> response operation.
**/
public class BatchGetLinkAttributesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public AttributeKeyAndValue[] attributes;
    public BatchGetLinkAttributesResponse withAttributes(AttributeKeyAndValue[] attributes) {
        this.attributes = attributes;
        return this;
    }
}