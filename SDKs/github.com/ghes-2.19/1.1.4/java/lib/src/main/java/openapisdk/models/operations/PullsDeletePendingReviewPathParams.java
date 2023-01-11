package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PullsDeletePendingReviewPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public PullsDeletePendingReviewPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pull_number")
    public Long pullNumber;
    public PullsDeletePendingReviewPathParams withPullNumber(Long pullNumber) {
        this.pullNumber = pullNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public PullsDeletePendingReviewPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=review_id")
    public Long reviewId;
    public PullsDeletePendingReviewPathParams withReviewId(Long reviewId) {
        this.reviewId = reviewId;
        return this;
    }
}