package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableRadiusRequest {
    public DisableRadiusHeaders headers;
    public DisableRadiusRequest withHeaders(DisableRadiusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisableRadiusRequest request;
    public DisableRadiusRequest withRequest(openapisdk.models.shared.DisableRadiusRequest request) {
        this.request = request;
        return this;
    }
}