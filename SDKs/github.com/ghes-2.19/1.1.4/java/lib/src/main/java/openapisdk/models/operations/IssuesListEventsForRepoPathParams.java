package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesListEventsForRepoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public IssuesListEventsForRepoPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public IssuesListEventsForRepoPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}