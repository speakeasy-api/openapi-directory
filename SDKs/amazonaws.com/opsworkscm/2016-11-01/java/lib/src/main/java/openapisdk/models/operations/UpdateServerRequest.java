package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServerRequest {
    public UpdateServerHeaders headers;
    public UpdateServerRequest withHeaders(UpdateServerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateServerRequest request;
    public UpdateServerRequest withRequest(openapisdk.models.shared.UpdateServerRequest request) {
        this.request = request;
        return this;
    }
}