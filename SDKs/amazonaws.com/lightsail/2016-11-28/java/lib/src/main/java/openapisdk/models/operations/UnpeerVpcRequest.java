package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnpeerVpcRequest {
    public UnpeerVpcHeaders headers;
    public UnpeerVpcRequest withHeaders(UnpeerVpcHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public UnpeerVpcRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}