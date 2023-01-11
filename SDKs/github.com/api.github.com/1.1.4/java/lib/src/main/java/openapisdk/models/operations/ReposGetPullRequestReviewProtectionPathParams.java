package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposGetPullRequestReviewProtectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=branch")
    public String branch;
    public ReposGetPullRequestReviewProtectionPathParams withBranch(String branch) {
        this.branch = branch;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposGetPullRequestReviewProtectionPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposGetPullRequestReviewProtectionPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}