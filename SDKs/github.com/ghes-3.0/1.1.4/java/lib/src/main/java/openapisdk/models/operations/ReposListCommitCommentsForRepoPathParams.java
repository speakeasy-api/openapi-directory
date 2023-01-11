package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposListCommitCommentsForRepoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposListCommitCommentsForRepoPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposListCommitCommentsForRepoPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}