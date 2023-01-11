package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAssignmentsForHitRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssignmentStatuses")
    public AssignmentStatusEnum[] assignmentStatuses;
    public ListAssignmentsForHitRequest withAssignmentStatuses(AssignmentStatusEnum[] assignmentStatuses) {
        this.assignmentStatuses = assignmentStatuses;
        return this;
    }
    @JsonProperty("HITId")
    public String hitId;
    public ListAssignmentsForHitRequest withHitId(String hitId) {
        this.hitId = hitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListAssignmentsForHitRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAssignmentsForHitRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}