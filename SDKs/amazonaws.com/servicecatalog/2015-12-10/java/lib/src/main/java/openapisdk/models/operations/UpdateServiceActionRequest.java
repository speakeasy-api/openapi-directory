package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceActionRequest {
    public UpdateServiceActionHeaders headers;
    public UpdateServiceActionRequest withHeaders(UpdateServiceActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateServiceActionInput request;
    public UpdateServiceActionRequest withRequest(openapisdk.models.shared.UpdateServiceActionInput request) {
        this.request = request;
        return this;
    }
}