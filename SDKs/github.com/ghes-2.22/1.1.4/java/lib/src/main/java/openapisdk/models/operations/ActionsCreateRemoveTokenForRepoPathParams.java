package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsCreateRemoveTokenForRepoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ActionsCreateRemoveTokenForRepoPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ActionsCreateRemoveTokenForRepoPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}