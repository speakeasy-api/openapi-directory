package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListThingGroupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListThingGroupsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingGroups")
    public GroupNameAndArn[] thingGroups;
    public ListThingGroupsResponse withThingGroups(GroupNameAndArn[] thingGroups) {
        this.thingGroups = thingGroups;
        return this;
    }
}