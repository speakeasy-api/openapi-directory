package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAccessesResponse {
    @JsonProperty("Accesses")
    public ListedAccess[] accesses;
    public ListAccessesResponse withAccesses(ListedAccess[] accesses) {
        this.accesses = accesses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAccessesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("ServerId")
    public String serverId;
    public ListAccessesResponse withServerId(String serverId) {
        this.serverId = serverId;
        return this;
    }
}