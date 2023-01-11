package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDistributedGrantsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Grants")
    public Grant[] grants;
    public ListDistributedGrantsResponse withGrants(Grant[] grants) {
        this.grants = grants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListDistributedGrantsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}