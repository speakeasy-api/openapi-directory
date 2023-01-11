package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InteractionsGetRestrictionsForRepoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public InteractionsGetRestrictionsForRepoPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public InteractionsGetRestrictionsForRepoPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}