package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFhirDatastoreRequest {
    public CreateFhirDatastoreHeaders headers;
    public CreateFhirDatastoreRequest withHeaders(CreateFhirDatastoreHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateFhirDatastoreRequest request;
    public CreateFhirDatastoreRequest withRequest(openapisdk.models.shared.CreateFhirDatastoreRequest request) {
        this.request = request;
        return this;
    }
}