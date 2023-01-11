package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeBudgetActionHistoriesResponse {
    @JsonProperty("ActionHistories")
    public ActionHistory[] actionHistories;
    public DescribeBudgetActionHistoriesResponse withActionHistories(ActionHistory[] actionHistories) {
        this.actionHistories = actionHistories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeBudgetActionHistoriesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}