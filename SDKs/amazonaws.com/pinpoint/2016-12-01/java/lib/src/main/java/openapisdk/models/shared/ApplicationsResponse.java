package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplicationsResponse
 * Provides information about all of your applications.
**/
public class ApplicationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Item")
    public ApplicationResponse[] item;
    public ApplicationsResponse withItem(ApplicationResponse[] item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ApplicationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}