package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetConnectionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionList")
    public Connection[] connectionList;
    public GetConnectionsResponse withConnectionList(Connection[] connectionList) {
        this.connectionList = connectionList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetConnectionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}