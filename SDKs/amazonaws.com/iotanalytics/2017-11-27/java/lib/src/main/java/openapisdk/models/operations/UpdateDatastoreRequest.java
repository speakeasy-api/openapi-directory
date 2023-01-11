package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDatastoreRequest {
    public UpdateDatastorePathParams pathParams;
    public UpdateDatastoreRequest withPathParams(UpdateDatastorePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateDatastoreHeaders headers;
    public UpdateDatastoreRequest withHeaders(UpdateDatastoreHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDatastoreRequestBody request;
    public UpdateDatastoreRequest withRequest(UpdateDatastoreRequestBody request) {
        this.request = request;
        return this;
    }
}