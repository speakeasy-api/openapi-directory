package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposUpdatePullRequestReviewProtectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=branch")
    public String branch;
    public ReposUpdatePullRequestReviewProtectionPathParams withBranch(String branch) {
        this.branch = branch;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposUpdatePullRequestReviewProtectionPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposUpdatePullRequestReviewProtectionPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}