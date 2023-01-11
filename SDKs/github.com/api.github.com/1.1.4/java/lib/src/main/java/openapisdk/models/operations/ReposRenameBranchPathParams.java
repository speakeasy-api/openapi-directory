package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposRenameBranchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=branch")
    public String branch;
    public ReposRenameBranchPathParams withBranch(String branch) {
        this.branch = branch;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposRenameBranchPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposRenameBranchPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}