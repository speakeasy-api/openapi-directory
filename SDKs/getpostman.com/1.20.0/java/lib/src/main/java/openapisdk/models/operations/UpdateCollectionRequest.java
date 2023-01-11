package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCollectionRequest {
    public UpdateCollectionPathParams pathParams;
    public UpdateCollectionRequest withPathParams(UpdateCollectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateCollectionRequestBody request;
    public UpdateCollectionRequest withRequest(UpdateCollectionRequestBody request) {
        this.request = request;
        return this;
    }
}