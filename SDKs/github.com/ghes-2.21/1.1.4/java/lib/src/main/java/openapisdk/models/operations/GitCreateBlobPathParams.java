package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GitCreateBlobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public GitCreateBlobPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public GitCreateBlobPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}