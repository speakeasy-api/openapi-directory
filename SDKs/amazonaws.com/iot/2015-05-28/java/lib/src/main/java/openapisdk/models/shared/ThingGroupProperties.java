package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ThingGroupProperties
 * Thing group properties.
**/
public class ThingGroupProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributePayload")
    public AttributePayload attributePayload;
    public ThingGroupProperties withAttributePayload(AttributePayload attributePayload) {
        this.attributePayload = attributePayload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingGroupDescription")
    public String thingGroupDescription;
    public ThingGroupProperties withThingGroupDescription(String thingGroupDescription) {
        this.thingGroupDescription = thingGroupDescription;
        return this;
    }
}