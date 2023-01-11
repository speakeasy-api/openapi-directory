package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PullsListCommentsForReviewPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public PullsListCommentsForReviewPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pull_number")
    public Long pullNumber;
    public PullsListCommentsForReviewPathParams withPullNumber(Long pullNumber) {
        this.pullNumber = pullNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public PullsListCommentsForReviewPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=review_id")
    public Long reviewId;
    public PullsListCommentsForReviewPathParams withReviewId(Long reviewId) {
        this.reviewId = reviewId;
        return this;
    }
}