package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableLdapsRequest {
    public EnableLdapsHeaders headers;
    public EnableLdapsRequest withHeaders(EnableLdapsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EnableLdapsRequest request;
    public EnableLdapsRequest withRequest(openapisdk.models.shared.EnableLdapsRequest request) {
        this.request = request;
        return this;
    }
}