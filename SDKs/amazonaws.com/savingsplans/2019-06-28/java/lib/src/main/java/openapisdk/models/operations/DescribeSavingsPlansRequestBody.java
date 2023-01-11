package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeSavingsPlansRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public openapisdk.models.shared.SavingsPlanFilter[] filters;
    public DescribeSavingsPlansRequestBody withFilters(openapisdk.models.shared.SavingsPlanFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeSavingsPlansRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeSavingsPlansRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savingsPlanArns")
    public String[] savingsPlanArns;
    public DescribeSavingsPlansRequestBody withSavingsPlanArns(String[] savingsPlanArns) {
        this.savingsPlanArns = savingsPlanArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savingsPlanIds")
    public String[] savingsPlanIds;
    public DescribeSavingsPlansRequestBody withSavingsPlanIds(String[] savingsPlanIds) {
        this.savingsPlanIds = savingsPlanIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("states")
    public openapisdk.models.shared.SavingsPlanStateEnum[] states;
    public DescribeSavingsPlansRequestBody withStates(openapisdk.models.shared.SavingsPlanStateEnum[] states) {
        this.states = states;
        return this;
    }
}