package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableAddOnRequest {
    public DisableAddOnHeaders headers;
    public DisableAddOnRequest withHeaders(DisableAddOnHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisableAddOnRequest request;
    public DisableAddOnRequest withRequest(openapisdk.models.shared.DisableAddOnRequest request) {
        this.request = request;
        return this;
    }
}