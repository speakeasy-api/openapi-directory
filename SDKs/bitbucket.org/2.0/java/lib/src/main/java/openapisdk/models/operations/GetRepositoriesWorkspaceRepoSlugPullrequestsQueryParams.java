package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugPullrequestsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum state;
    public GetRepositoriesWorkspaceRepoSlugPullrequestsQueryParams withState(GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum state) {
        this.state = state;
        return this;
    }
}