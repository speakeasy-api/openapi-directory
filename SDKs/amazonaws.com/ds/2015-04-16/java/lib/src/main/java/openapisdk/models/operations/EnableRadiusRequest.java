package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableRadiusRequest {
    public EnableRadiusHeaders headers;
    public EnableRadiusRequest withHeaders(EnableRadiusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EnableRadiusRequest request;
    public EnableRadiusRequest withRequest(openapisdk.models.shared.EnableRadiusRequest request) {
        this.request = request;
        return this;
    }
}