package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListGroupsResponse {
    @JsonProperty("Groups")
    public Group[] groups;
    public ListGroupsResponse withGroups(Group[] groups) {
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