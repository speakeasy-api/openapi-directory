package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDatastoreRequest {
    public CreateDatastoreHeaders headers;
    public CreateDatastoreRequest withHeaders(CreateDatastoreHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateDatastoreRequestBody request;
    public CreateDatastoreRequest withRequest(CreateDatastoreRequestBody request) {
        this.request = request;
        return this;
    }
}