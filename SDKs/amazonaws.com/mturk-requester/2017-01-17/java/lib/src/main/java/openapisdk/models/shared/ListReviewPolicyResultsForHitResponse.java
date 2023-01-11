package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListReviewPolicyResultsForHitResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssignmentReviewPolicy")
    public ReviewPolicy assignmentReviewPolicy;
    public ListReviewPolicyResultsForHitResponse withAssignmentReviewPolicy(ReviewPolicy assignmentReviewPolicy) {
        this.assignmentReviewPolicy = assignmentReviewPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssignmentReviewReport")
    public ReviewReport assignmentReviewReport;
    public ListReviewPolicyResultsForHitResponse withAssignmentReviewReport(ReviewReport assignmentReviewReport) {
        this.assignmentReviewReport = assignmentReviewReport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HITId")
    public String hitId;
    public ListReviewPolicyResultsForHitResponse withHitId(String hitId) {
        this.hitId = hitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HITReviewPolicy")
    public ReviewPolicy hitReviewPolicy;
    public ListReviewPolicyResultsForHitResponse withHitReviewPolicy(ReviewPolicy hitReviewPolicy) {
        this.hitReviewPolicy = hitReviewPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HITReviewReport")
    public ReviewReport hitReviewReport;
    public ListReviewPolicyResultsForHitResponse withHitReviewReport(ReviewReport hitReviewReport) {
        this.hitReviewReport = hitReviewReport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListReviewPolicyResultsForHitResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}