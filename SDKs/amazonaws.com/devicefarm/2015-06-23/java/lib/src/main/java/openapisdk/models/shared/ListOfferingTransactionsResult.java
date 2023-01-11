package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListOfferingTransactionsResult
 * Returns the transaction log of the specified offerings.
**/
public class ListOfferingTransactionsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListOfferingTransactionsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offeringTransactions")
    public OfferingTransaction[] offeringTransactions;
    public ListOfferingTransactionsResult withOfferingTransactions(OfferingTransaction[] offeringTransactions) {
        this.offeringTransactions = offeringTransactions;
        return this;
    }
}