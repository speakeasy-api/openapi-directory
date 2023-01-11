package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConnectionRequest {
    public UpdateConnectionHeaders headers;
    public UpdateConnectionRequest withHeaders(UpdateConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateConnectionRequest request;
    public UpdateConnectionRequest withRequest(openapisdk.models.shared.UpdateConnectionRequest request) {
        this.request = request;
        return this;
    }
}