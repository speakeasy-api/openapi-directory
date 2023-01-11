package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListOfferingTransactionsRequest
 * Represents the request to list the offering transaction history.
**/
public class ListOfferingTransactionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListOfferingTransactionsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}