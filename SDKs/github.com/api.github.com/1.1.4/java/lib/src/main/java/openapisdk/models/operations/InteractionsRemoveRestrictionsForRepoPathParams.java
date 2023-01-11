package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InteractionsRemoveRestrictionsForRepoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public InteractionsRemoveRestrictionsForRepoPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public InteractionsRemoveRestrictionsForRepoPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}