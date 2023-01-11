package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAuditMitigationActionsExecutionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionsExecutions")
    public AuditMitigationActionExecutionMetadata[] actionsExecutions;
    public ListAuditMitigationActionsExecutionsResponse withActionsExecutions(AuditMitigationActionExecutionMetadata[] actionsExecutions) {
        this.actionsExecutions = actionsExecutions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAuditMitigationActionsExecutionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}