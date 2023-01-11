package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmConnectionRequest {
    public ConfirmConnectionHeaders headers;
    public ConfirmConnectionRequest withHeaders(ConfirmConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConfirmConnectionRequest request;
    public ConfirmConnectionRequest withRequest(openapisdk.models.shared.ConfirmConnectionRequest request) {
        this.request = request;
        return this;
    }
}