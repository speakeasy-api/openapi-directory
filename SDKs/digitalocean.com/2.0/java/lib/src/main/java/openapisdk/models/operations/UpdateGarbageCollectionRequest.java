package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGarbageCollectionRequest {
    public UpdateGarbageCollectionPathParams pathParams;
    public UpdateGarbageCollectionRequest withPathParams(UpdateGarbageCollectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateGarbageCollectionRequestBody request;
    public UpdateGarbageCollectionRequest withRequest(UpdateGarbageCollectionRequestBody request) {
        this.request = request;
        return this;
    }
}