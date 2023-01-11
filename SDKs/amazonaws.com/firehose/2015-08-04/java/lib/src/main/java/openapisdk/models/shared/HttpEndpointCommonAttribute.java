package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * HttpEndpointCommonAttribute
 * Describes the metadata that's delivered to the specified HTTP endpoint destination.
**/
public class HttpEndpointCommonAttribute {
    @JsonProperty("AttributeName")
    public String attributeName;
    public HttpEndpointCommonAttribute withAttributeName(String attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    @JsonProperty("AttributeValue")
    public String attributeValue;
    public HttpEndpointCommonAttribute withAttributeValue(String attributeValue) {
        this.attributeValue = attributeValue;
        return this;
    }
}