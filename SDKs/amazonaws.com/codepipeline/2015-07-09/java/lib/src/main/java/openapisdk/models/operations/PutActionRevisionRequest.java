package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutActionRevisionRequest {
    public PutActionRevisionHeaders headers;
    public PutActionRevisionRequest withHeaders(PutActionRevisionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutActionRevisionInput request;
    public PutActionRevisionRequest withRequest(openapisdk.models.shared.PutActionRevisionInput request) {
        this.request = request;
        return this;
    }
}