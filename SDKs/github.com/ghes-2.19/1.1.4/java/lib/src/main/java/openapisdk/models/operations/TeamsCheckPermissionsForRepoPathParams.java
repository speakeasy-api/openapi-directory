package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsCheckPermissionsForRepoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public TeamsCheckPermissionsForRepoPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public TeamsCheckPermissionsForRepoPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsCheckPermissionsForRepoPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}