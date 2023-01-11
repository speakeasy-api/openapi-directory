package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttributesResource
 * Provides information about the type and the names of attributes that were removed from all the endpoints that are associated with an application.
**/
public class AttributesResource {
    @JsonProperty("ApplicationId")
    public String applicationId;
    public AttributesResource withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonProperty("AttributeType")
    public String attributeType;
    public AttributesResource withAttributeType(String attributeType) {
        this.attributeType = attributeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public String[] attributes;
    public AttributesResource withAttributes(String[] attributes) {
        this.attributes = attributes;
        return this;
    }
}