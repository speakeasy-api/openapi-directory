package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AddCustomAttributesRequest
 * Represents the request to add custom attributes.
**/
public class AddCustomAttributesRequest {
    @JsonProperty("CustomAttributes")
    public SchemaAttributeType[] customAttributes;
    public AddCustomAttributesRequest withCustomAttributes(SchemaAttributeType[] customAttributes) {
        this.customAttributes = customAttributes;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public AddCustomAttributesRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}