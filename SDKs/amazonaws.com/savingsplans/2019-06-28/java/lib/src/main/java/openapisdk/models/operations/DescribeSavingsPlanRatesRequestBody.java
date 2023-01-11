package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeSavingsPlanRatesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public openapisdk.models.shared.SavingsPlanRateFilter[] filters;
    public DescribeSavingsPlanRatesRequestBody withFilters(openapisdk.models.shared.SavingsPlanRateFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeSavingsPlanRatesRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeSavingsPlanRatesRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("savingsPlanId")
    public String savingsPlanId;
    public DescribeSavingsPlanRatesRequestBody withSavingsPlanId(String savingsPlanId) {
        this.savingsPlanId = savingsPlanId;
        return this;
    }
}