package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStoreRequest {
    public UpdateStorePathParams pathParams;
    public UpdateStoreRequest withPathParams(UpdateStorePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateStoreRequest request;
    public UpdateStoreRequest withRequest(openapisdk.models.shared.UpdateStoreRequest request) {
        this.request = request;
        return this;
    }
}