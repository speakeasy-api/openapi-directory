package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsAddOrUpdateRepoPermissionsLegacyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public TeamsAddOrUpdateRepoPermissionsLegacyPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public TeamsAddOrUpdateRepoPermissionsLegacyPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsAddOrUpdateRepoPermissionsLegacyPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}