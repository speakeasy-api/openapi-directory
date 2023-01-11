package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsSetAllowedActionsRepositoryRequest {
    public ActionsSetAllowedActionsRepositoryPathParams pathParams;
    public ActionsSetAllowedActionsRepositoryRequest withPathParams(ActionsSetAllowedActionsRepositoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SelectedActions request;
    public ActionsSetAllowedActionsRepositoryRequest withRequest(openapisdk.models.shared.SelectedActions request) {
        this.request = request;
        return this;
    }
}