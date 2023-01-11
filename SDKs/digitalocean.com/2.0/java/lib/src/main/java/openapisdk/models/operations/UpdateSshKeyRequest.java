package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSshKeyRequest {
    public UpdateSshKeyPathParams pathParams;
    public UpdateSshKeyRequest withPathParams(UpdateSshKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateSshKeyRequestBody request;
    public UpdateSshKeyRequest withRequest(UpdateSshKeyRequestBody request) {
        this.request = request;
        return this;
    }
}