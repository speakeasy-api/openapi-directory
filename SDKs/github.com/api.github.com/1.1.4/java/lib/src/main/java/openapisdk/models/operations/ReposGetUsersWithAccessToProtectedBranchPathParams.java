package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposGetUsersWithAccessToProtectedBranchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=branch")
    public String branch;
    public ReposGetUsersWithAccessToProtectedBranchPathParams withBranch(String branch) {
        this.branch = branch;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposGetUsersWithAccessToProtectedBranchPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposGetUsersWithAccessToProtectedBranchPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}