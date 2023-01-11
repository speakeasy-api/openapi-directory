package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListThingGroupsForThingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListThingGroupsForThingResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingGroups")
    public GroupNameAndArn[] thingGroups;
    public ListThingGroupsForThingResponse withThingGroups(GroupNameAndArn[] thingGroups) {
        this.thingGroups = thingGroups;
        return this;
    }
}