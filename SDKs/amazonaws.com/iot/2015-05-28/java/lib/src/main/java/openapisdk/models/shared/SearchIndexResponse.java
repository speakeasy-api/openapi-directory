package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchIndexResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public SearchIndexResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingGroups")
    public ThingGroupDocument[] thingGroups;
    public SearchIndexResponse withThingGroups(ThingGroupDocument[] thingGroups) {
        this.thingGroups = thingGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("things")
    public ThingDocument[] things;
    public SearchIndexResponse withThings(ThingDocument[] things) {
        this.things = things;
        return this;
    }
}