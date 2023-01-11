package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListLongTermPricingResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LongTermPricingEntries")
    public LongTermPricingListEntry[] longTermPricingEntries;
    public ListLongTermPricingResult withLongTermPricingEntries(LongTermPricingListEntry[] longTermPricingEntries) {
        this.longTermPricingEntries = longTermPricingEntries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListLongTermPricingResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}