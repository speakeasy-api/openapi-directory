package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDetectMitigationActionsExecutionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionsExecutions")
    public DetectMitigationActionExecution[] actionsExecutions;
    public ListDetectMitigationActionsExecutionsResponse withActionsExecutions(DetectMitigationActionExecution[] actionsExecutions) {
        this.actionsExecutions = actionsExecutions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDetectMitigationActionsExecutionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}