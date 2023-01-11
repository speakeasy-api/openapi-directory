package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetGroupsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Groups")
    public GroupSummary[] groups;
    public GetGroupsResult withGroups(GroupSummary[] groups) {
        this.groups = groups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetGroupsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}