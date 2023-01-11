package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTerminologyRequest {
    public DeleteTerminologyHeaders headers;
    public DeleteTerminologyRequest withHeaders(DeleteTerminologyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteTerminologyRequest request;
    public DeleteTerminologyRequest withRequest(openapisdk.models.shared.DeleteTerminologyRequest request) {
        this.request = request;
        return this;
    }
}