package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExpireSessionRequest {
    public ExpireSessionHeaders headers;
    public ExpireSessionRequest withHeaders(ExpireSessionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExpireSessionRequest request;
    public ExpireSessionRequest withRequest(openapisdk.models.shared.ExpireSessionRequest request) {
        this.request = request;
        return this;
    }
}