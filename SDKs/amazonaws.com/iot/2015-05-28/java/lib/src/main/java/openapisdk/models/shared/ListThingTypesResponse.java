package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListThingTypesResponse
 * The output for the ListThingTypes operation.
**/
public class ListThingTypesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListThingTypesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingTypes")
    public ThingTypeDefinition[] thingTypes;
    public ListThingTypesResponse withThingTypes(ThingTypeDefinition[] thingTypes) {
        this.thingTypes = thingTypes;
        return this;
    }
}