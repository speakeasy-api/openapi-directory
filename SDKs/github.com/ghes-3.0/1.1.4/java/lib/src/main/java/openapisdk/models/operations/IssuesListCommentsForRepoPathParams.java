package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesListCommentsForRepoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public IssuesListCommentsForRepoPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public IssuesListCommentsForRepoPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}