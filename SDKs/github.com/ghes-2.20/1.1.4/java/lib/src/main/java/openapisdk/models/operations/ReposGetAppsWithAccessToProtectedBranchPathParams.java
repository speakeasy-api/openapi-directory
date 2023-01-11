package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposGetAppsWithAccessToProtectedBranchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=branch")
    public String branch;
    public ReposGetAppsWithAccessToProtectedBranchPathParams withBranch(String branch) {
        this.branch = branch;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposGetAppsWithAccessToProtectedBranchPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposGetAppsWithAccessToProtectedBranchPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}