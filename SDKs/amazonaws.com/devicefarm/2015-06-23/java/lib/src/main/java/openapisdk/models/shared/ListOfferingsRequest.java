package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListOfferingsRequest
 * Represents the request to list all offerings.
**/
public class ListOfferingsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListOfferingsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}