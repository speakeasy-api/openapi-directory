package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GitCreateRefPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public GitCreateRefPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public GitCreateRefPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}