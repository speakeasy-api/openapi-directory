package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateComponentRequest {
    public UpdateComponentHeaders headers;
    public UpdateComponentRequest withHeaders(UpdateComponentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateComponentRequest request;
    public UpdateComponentRequest withRequest(openapisdk.models.shared.UpdateComponentRequest request) {
        this.request = request;
        return this;
    }
}