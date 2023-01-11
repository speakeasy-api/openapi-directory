package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPrincipalThingsResponse
 * The output from the ListPrincipalThings operation.
**/
public class ListPrincipalThingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListPrincipalThingsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("things")
    public String[] things;
    public ListPrincipalThingsResponse withThings(String[] things) {
        this.things = things;
        return this;
    }
}