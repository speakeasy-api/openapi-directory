package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBonusPaymentsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssignmentId")
    public String assignmentId;
    public ListBonusPaymentsRequest withAssignmentId(String assignmentId) {
        this.assignmentId = assignmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HITId")
    public String hitId;
    public ListBonusPaymentsRequest withHitId(String hitId) {
        this.hitId = hitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListBonusPaymentsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListBonusPaymentsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}