package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFhirDatastoreRequest {
    public DeleteFhirDatastoreHeaders headers;
    public DeleteFhirDatastoreRequest withHeaders(DeleteFhirDatastoreHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteFhirDatastoreRequest request;
    public DeleteFhirDatastoreRequest withRequest(openapisdk.models.shared.DeleteFhirDatastoreRequest request) {
        this.request = request;
        return this;
    }
}