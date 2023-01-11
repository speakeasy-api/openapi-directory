package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListReviewPolicyResultsForHitRequest {
    @JsonProperty("HITId")
    public String hitId;
    public ListReviewPolicyResultsForHitRequest withHitId(String hitId) {
        this.hitId = hitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListReviewPolicyResultsForHitRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListReviewPolicyResultsForHitRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyLevels")
    public ReviewPolicyLevelEnum[] policyLevels;
    public ListReviewPolicyResultsForHitRequest withPolicyLevels(ReviewPolicyLevelEnum[] policyLevels) {
        this.policyLevels = policyLevels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetrieveActions")
    public Boolean retrieveActions;
    public ListReviewPolicyResultsForHitRequest withRetrieveActions(Boolean retrieveActions) {
        this.retrieveActions = retrieveActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetrieveResults")
    public Boolean retrieveResults;
    public ListReviewPolicyResultsForHitRequest withRetrieveResults(Boolean retrieveResults) {
        this.retrieveResults = retrieveResults;
        return this;
    }
}