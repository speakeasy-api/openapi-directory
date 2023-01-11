package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ThingTypeDefinition
 * The definition of the thing type, including thing type name and description.
**/
public class ThingTypeDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingTypeArn")
    public String thingTypeArn;
    public ThingTypeDefinition withThingTypeArn(String thingTypeArn) {
        this.thingTypeArn = thingTypeArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingTypeMetadata")
    public ThingTypeMetadata thingTypeMetadata;
    public ThingTypeDefinition withThingTypeMetadata(ThingTypeMetadata thingTypeMetadata) {
        this.thingTypeMetadata = thingTypeMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingTypeName")
    public String thingTypeName;
    public ThingTypeDefinition withThingTypeName(String thingTypeName) {
        this.thingTypeName = thingTypeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingTypeProperties")
    public ThingTypeProperties thingTypeProperties;
    public ThingTypeDefinition withThingTypeProperties(ThingTypeProperties thingTypeProperties) {
        this.thingTypeProperties = thingTypeProperties;
        return this;
    }
}