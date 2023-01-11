package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsSetGithubActionsPermissionsRepositoryRequest {
    public ActionsSetGithubActionsPermissionsRepositoryPathParams pathParams;
    public ActionsSetGithubActionsPermissionsRepositoryRequest withPathParams(ActionsSetGithubActionsPermissionsRepositoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ActionsSetGithubActionsPermissionsRepositoryRequestBody request;
    public ActionsSetGithubActionsPermissionsRepositoryRequest withRequest(ActionsSetGithubActionsPermissionsRepositoryRequestBody request) {
        this.request = request;
        return this;
    }
}