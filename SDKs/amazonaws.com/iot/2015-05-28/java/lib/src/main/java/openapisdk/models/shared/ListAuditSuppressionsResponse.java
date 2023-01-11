package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAuditSuppressionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAuditSuppressionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suppressions")
    public AuditSuppression[] suppressions;
    public ListAuditSuppressionsResponse withSuppressions(AuditSuppression[] suppressions) {
        this.suppressions = suppressions;
        return this;
    }
}