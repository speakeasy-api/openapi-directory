package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetStatusRequest {
    public SetStatusHeaders headers;
    public SetStatusRequest withHeaders(SetStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetStatusInput request;
    public SetStatusRequest withRequest(openapisdk.models.shared.SetStatusInput request) {
        this.request = request;
        return this;
    }
}