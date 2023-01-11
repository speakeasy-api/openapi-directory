package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListLaunchProfileMembersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public LaunchProfileMembership[] members;
    public ListLaunchProfileMembersResponse withMembers(LaunchProfileMembership[] members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListLaunchProfileMembersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}