package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeSavingsPlanRatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeSavingsPlanRatesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savingsPlanId")
    public String savingsPlanId;
    public DescribeSavingsPlanRatesResponse withSavingsPlanId(String savingsPlanId) {
        this.savingsPlanId = savingsPlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchResults")
    public SavingsPlanRate[] searchResults;
    public DescribeSavingsPlanRatesResponse withSearchResults(SavingsPlanRate[] searchResults) {
        this.searchResults = searchResults;
        return this;
    }
}