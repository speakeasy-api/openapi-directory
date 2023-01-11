package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListOfferingsResult
 * Represents the return values of the list of offerings.
**/
public class ListOfferingsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListOfferingsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerings")
    public Offering[] offerings;
    public ListOfferingsResult withOfferings(Offering[] offerings) {
        this.offerings = offerings;
        return this;
    }
}