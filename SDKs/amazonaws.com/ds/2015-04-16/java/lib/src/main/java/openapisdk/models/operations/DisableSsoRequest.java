package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableSsoRequest {
    public DisableSsoHeaders headers;
    public DisableSsoRequest withHeaders(DisableSsoHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisableSsoRequest request;
    public DisableSsoRequest withRequest(openapisdk.models.shared.DisableSsoRequest request) {
        this.request = request;
        return this;
    }
}