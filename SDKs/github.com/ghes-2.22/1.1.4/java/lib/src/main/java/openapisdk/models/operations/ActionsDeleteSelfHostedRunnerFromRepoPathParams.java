package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsDeleteSelfHostedRunnerFromRepoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ActionsDeleteSelfHostedRunnerFromRepoPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ActionsDeleteSelfHostedRunnerFromRepoPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=runner_id")
    public Long runnerId;
    public ActionsDeleteSelfHostedRunnerFromRepoPathParams withRunnerId(Long runnerId) {
        this.runnerId = runnerId;
        return this;
    }
}