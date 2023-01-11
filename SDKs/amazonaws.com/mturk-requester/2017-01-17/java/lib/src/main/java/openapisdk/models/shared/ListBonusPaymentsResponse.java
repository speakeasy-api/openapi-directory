package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBonusPaymentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BonusPayments")
    public BonusPayment[] bonusPayments;
    public ListBonusPaymentsResponse withBonusPayments(BonusPayment[] bonusPayments) {
        this.bonusPayments = bonusPayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListBonusPaymentsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumResults")
    public Long numResults;
    public ListBonusPaymentsResponse withNumResults(Long numResults) {
        this.numResults = numResults;
        return this;
    }
}