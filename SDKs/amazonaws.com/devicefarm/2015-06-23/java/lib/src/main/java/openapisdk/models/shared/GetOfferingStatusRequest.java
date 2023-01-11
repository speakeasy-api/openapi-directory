package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetOfferingStatusRequest
 * Represents the request to retrieve the offering status for the specified customer or account.
**/
public class GetOfferingStatusRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetOfferingStatusRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}