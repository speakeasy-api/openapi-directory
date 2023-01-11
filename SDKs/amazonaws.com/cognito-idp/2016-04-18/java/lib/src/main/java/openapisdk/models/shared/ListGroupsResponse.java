package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListGroupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Groups")
    public GroupType[] groups;
    public ListGroupsResponse withGroups(GroupType[] groups) {
        this.groups = groups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListGroupsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}