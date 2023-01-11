package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ThingDocument
 * The thing search index document.
**/
public class ThingDocument {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public java.util.Map<String, String> attributes;
    public ThingDocument withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectivity")
    public ThingConnectivity connectivity;
    public ThingDocument withConnectivity(ThingConnectivity connectivity) {
        this.connectivity = connectivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shadow")
    public String shadow;
    public ThingDocument withShadow(String shadow) {
        this.shadow = shadow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingGroupNames")
    public String[] thingGroupNames;
    public ThingDocument withThingGroupNames(String[] thingGroupNames) {
        this.thingGroupNames = thingGroupNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingId")
    public String thingId;
    public ThingDocument withThingId(String thingId) {
        this.thingId = thingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingName")
    public String thingName;
    public ThingDocument withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingTypeName")
    public String thingTypeName;
    public ThingDocument withThingTypeName(String thingTypeName) {
        this.thingTypeName = thingTypeName;
        return this;
    }
}