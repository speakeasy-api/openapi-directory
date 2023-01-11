package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateThingResponse
 * The output of the CreateThing operation.
**/
public class CreateThingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingArn")
    public String thingArn;
    public CreateThingResponse withThingArn(String thingArn) {
        this.thingArn = thingArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingId")
    public String thingId;
    public CreateThingResponse withThingId(String thingId) {
        this.thingId = thingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingName")
    public String thingName;
    public CreateThingResponse withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}