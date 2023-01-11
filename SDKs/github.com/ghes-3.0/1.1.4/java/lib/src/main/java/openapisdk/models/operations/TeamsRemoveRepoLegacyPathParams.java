package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsRemoveRepoLegacyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public TeamsRemoveRepoLegacyPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public TeamsRemoveRepoLegacyPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;
    public TeamsRemoveRepoLegacyPathParams withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}