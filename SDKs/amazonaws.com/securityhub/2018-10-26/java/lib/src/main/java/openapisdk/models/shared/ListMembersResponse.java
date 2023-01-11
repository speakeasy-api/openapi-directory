package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMembersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Members")
    public Member[] members;
    public ListMembersResponse withMembers(Member[] members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListMembersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}