package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsSetSelectedReposForOrgSecretRequest {
    public ActionsSetSelectedReposForOrgSecretPathParams pathParams;
    public ActionsSetSelectedReposForOrgSecretRequest withPathParams(ActionsSetSelectedReposForOrgSecretPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ActionsSetSelectedReposForOrgSecretRequestBody request;
    public ActionsSetSelectedReposForOrgSecretRequest withRequest(ActionsSetSelectedReposForOrgSecretRequestBody request) {
        this.request = request;
        return this;
    }
}