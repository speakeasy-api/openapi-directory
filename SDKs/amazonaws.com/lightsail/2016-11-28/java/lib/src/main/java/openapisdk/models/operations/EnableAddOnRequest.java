package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableAddOnRequest {
    public EnableAddOnHeaders headers;
    public EnableAddOnRequest withHeaders(EnableAddOnHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EnableAddOnRequest request;
    public EnableAddOnRequest withRequest(openapisdk.models.shared.EnableAddOnRequest request) {
        this.request = request;
        return this;
    }
}