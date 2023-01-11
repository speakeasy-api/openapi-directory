package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListResponsePlansOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListResponsePlansOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("responsePlanSummaries")
    public ResponsePlanSummary[] responsePlanSummaries;
    public ListResponsePlansOutput withResponsePlanSummaries(ResponsePlanSummary[] responsePlanSummaries) {
        this.responsePlanSummaries = responsePlanSummaries;
        return this;
    }
}