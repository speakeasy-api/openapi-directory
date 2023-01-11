package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsCreateOrUpdateOrgSecretRequest {
    public ActionsCreateOrUpdateOrgSecretPathParams pathParams;
    public ActionsCreateOrUpdateOrgSecretRequest withPathParams(ActionsCreateOrUpdateOrgSecretPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ActionsCreateOrUpdateOrgSecretRequestBody request;
    public ActionsCreateOrUpdateOrgSecretRequest withRequest(ActionsCreateOrUpdateOrgSecretRequestBody request) {
        this.request = request;
        return this;
    }
}