package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposSetAppAccessRestrictionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=branch")
    public String branch;
    public ReposSetAppAccessRestrictionsPathParams withBranch(String branch) {
        this.branch = branch;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposSetAppAccessRestrictionsPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposSetAppAccessRestrictionsPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}