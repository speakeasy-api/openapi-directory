package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IssueEventDismissedReview {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dismissal_commit_id")
    public String dismissalCommitId;
    public IssueEventDismissedReview withDismissalCommitId(String dismissalCommitId) {
        this.dismissalCommitId = dismissalCommitId;
        return this;
    }
    @JsonProperty("dismissal_message")
    public String dismissalMessage;
    public IssueEventDismissedReview withDismissalMessage(String dismissalMessage) {
        this.dismissalMessage = dismissalMessage;
        return this;
    }
    @JsonProperty("review_id")
    public Long reviewId;
    public IssueEventDismissedReview withReviewId(Long reviewId) {
        this.reviewId = reviewId;
        return this;
    }
    @JsonProperty("state")
    public String state;
    public IssueEventDismissedReview withState(String state) {
        this.state = state;
        return this;
    }
}