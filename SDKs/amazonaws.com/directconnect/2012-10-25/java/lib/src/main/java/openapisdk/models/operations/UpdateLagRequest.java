package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLagRequest {
    public UpdateLagHeaders headers;
    public UpdateLagRequest withHeaders(UpdateLagHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateLagRequest request;
    public UpdateLagRequest withRequest(openapisdk.models.shared.UpdateLagRequest request) {
        this.request = request;
        return this;
    }
}