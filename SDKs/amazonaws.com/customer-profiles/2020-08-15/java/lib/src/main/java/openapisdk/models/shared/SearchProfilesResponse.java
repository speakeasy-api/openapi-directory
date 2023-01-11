package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchProfilesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Items")
    public Profile[] items;
    public SearchProfilesResponse withItems(Profile[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public SearchProfilesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}