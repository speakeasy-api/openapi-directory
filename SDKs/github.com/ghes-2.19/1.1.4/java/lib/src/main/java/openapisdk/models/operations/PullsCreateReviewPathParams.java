package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PullsCreateReviewPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public PullsCreateReviewPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pull_number")
    public Long pullNumber;
    public PullsCreateReviewPathParams withPullNumber(Long pullNumber) {
        this.pullNumber = pullNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public PullsCreateReviewPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}