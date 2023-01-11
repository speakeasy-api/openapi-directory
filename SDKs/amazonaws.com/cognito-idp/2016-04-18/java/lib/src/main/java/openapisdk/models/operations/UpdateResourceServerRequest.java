package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateResourceServerRequest {
    public UpdateResourceServerHeaders headers;
    public UpdateResourceServerRequest withHeaders(UpdateResourceServerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateResourceServerRequest request;
    public UpdateResourceServerRequest withRequest(openapisdk.models.shared.UpdateResourceServerRequest request) {
        this.request = request;
        return this;
    }
}