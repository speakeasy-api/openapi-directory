package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTeamMembersResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListTeamMembersResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("teamMembers")
    public TeamMember[] teamMembers;
    public ListTeamMembersResult withTeamMembers(TeamMember[] teamMembers) {
        this.teamMembers = teamMembers;
        return this;
    }
}