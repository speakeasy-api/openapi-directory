package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceRequest {
    public UpdateServiceHeaders headers;
    public UpdateServiceRequest withHeaders(UpdateServiceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateServiceRequest request;
    public UpdateServiceRequest withRequest(openapisdk.models.shared.UpdateServiceRequest request) {
        this.request = request;
        return this;
    }
}