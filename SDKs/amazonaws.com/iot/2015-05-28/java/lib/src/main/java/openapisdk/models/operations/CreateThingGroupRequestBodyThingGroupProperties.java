package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateThingGroupRequestBodyThingGroupProperties
 * Thing group properties.
**/
public class CreateThingGroupRequestBodyThingGroupProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributePayload")
    public openapisdk.models.shared.AttributePayload attributePayload;
    public CreateThingGroupRequestBodyThingGroupProperties withAttributePayload(openapisdk.models.shared.AttributePayload attributePayload) {
        this.attributePayload = attributePayload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingGroupDescription")
    public String thingGroupDescription;
    public CreateThingGroupRequestBodyThingGroupProperties withThingGroupDescription(String thingGroupDescription) {
        this.thingGroupDescription = thingGroupDescription;
        return this;
    }
}