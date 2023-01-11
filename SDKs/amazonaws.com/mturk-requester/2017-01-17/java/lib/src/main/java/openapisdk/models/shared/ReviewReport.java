package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReviewReport
 *  Contains both ReviewResult and ReviewAction elements for a particular HIT. 
**/
public class ReviewReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReviewActions")
    public ReviewActionDetail[] reviewActions;
    public ReviewReport withReviewActions(ReviewActionDetail[] reviewActions) {
        this.reviewActions = reviewActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReviewResults")
    public ReviewResultDetail[] reviewResults;
    public ReviewReport withReviewResults(ReviewResultDetail[] reviewResults) {
        this.reviewResults = reviewResults;
        return this;
    }
}