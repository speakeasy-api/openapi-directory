package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateThingTypeResponse
 * The output of the CreateThingType operation.
**/
public class CreateThingTypeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingTypeArn")
    public String thingTypeArn;
    public CreateThingTypeResponse withThingTypeArn(String thingTypeArn) {
        this.thingTypeArn = thingTypeArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingTypeId")
    public String thingTypeId;
    public CreateThingTypeResponse withThingTypeId(String thingTypeId) {
        this.thingTypeId = thingTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingTypeName")
    public String thingTypeName;
    public CreateThingTypeResponse withThingTypeName(String thingTypeName) {
        this.thingTypeName = thingTypeName;
        return this;
    }
}