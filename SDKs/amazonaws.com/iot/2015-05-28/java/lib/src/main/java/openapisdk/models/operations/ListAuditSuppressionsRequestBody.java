package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAuditSuppressionsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ascendingOrder")
    public Boolean ascendingOrder;
    public ListAuditSuppressionsRequestBody withAscendingOrder(Boolean ascendingOrder) {
        this.ascendingOrder = ascendingOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkName")
    public String checkName;
    public ListAuditSuppressionsRequestBody withCheckName(String checkName) {
        this.checkName = checkName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListAuditSuppressionsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAuditSuppressionsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceIdentifier")
    public ListAuditSuppressionsRequestBodyResourceIdentifier resourceIdentifier;
    public ListAuditSuppressionsRequestBody withResourceIdentifier(ListAuditSuppressionsRequestBodyResourceIdentifier resourceIdentifier) {
        this.resourceIdentifier = resourceIdentifier;
        return this;
    }
}