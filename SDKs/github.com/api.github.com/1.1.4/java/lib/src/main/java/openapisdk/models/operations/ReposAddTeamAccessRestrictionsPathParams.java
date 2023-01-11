package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposAddTeamAccessRestrictionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=branch")
    public String branch;
    public ReposAddTeamAccessRestrictionsPathParams withBranch(String branch) {
        this.branch = branch;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposAddTeamAccessRestrictionsPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposAddTeamAccessRestrictionsPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}