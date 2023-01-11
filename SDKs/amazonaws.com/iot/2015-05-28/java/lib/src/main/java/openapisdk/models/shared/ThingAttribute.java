package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ThingAttribute
 * The properties of the thing, including thing name, thing type name, and a list of thing attributes.
**/
public class ThingAttribute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public java.util.Map<String, String> attributes;
    public ThingAttribute withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingArn")
    public String thingArn;
    public ThingAttribute withThingArn(String thingArn) {
        this.thingArn = thingArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingName")
    public String thingName;
    public ThingAttribute withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingTypeName")
    public String thingTypeName;
    public ThingAttribute withThingTypeName(String thingTypeName) {
        this.thingTypeName = thingTypeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Long version;
    public ThingAttribute withVersion(Long version) {
        this.version = version;
        return this;
    }
}