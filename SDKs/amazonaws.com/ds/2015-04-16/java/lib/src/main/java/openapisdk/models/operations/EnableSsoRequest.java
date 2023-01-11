package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableSsoRequest {
    public EnableSsoHeaders headers;
    public EnableSsoRequest withHeaders(EnableSsoHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EnableSsoRequest request;
    public EnableSsoRequest withRequest(openapisdk.models.shared.EnableSsoRequest request) {
        this.request = request;
        return this;
    }
}