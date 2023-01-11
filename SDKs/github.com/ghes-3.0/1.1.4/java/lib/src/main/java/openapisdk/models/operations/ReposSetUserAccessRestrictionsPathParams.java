package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposSetUserAccessRestrictionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=branch")
    public String branch;
    public ReposSetUserAccessRestrictionsPathParams withBranch(String branch) {
        this.branch = branch;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposSetUserAccessRestrictionsPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposSetUserAccessRestrictionsPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}