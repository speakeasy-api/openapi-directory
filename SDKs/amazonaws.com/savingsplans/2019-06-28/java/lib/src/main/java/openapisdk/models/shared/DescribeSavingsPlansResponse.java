package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeSavingsPlansResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeSavingsPlansResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savingsPlans")
    public SavingsPlan[] savingsPlans;
    public DescribeSavingsPlansResponse withSavingsPlans(SavingsPlan[] savingsPlans) {
        this.savingsPlans = savingsPlans;
        return this;
    }
}