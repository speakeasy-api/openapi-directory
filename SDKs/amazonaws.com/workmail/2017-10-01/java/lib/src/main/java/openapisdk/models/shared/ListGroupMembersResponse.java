package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListGroupMembersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Members")
    public Member[] members;
    public ListGroupMembersResponse withMembers(Member[] members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListGroupMembersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}