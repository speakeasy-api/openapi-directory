package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IsVpcPeeredRequest {
    public IsVpcPeeredHeaders headers;
    public IsVpcPeeredRequest withHeaders(IsVpcPeeredHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public IsVpcPeeredRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}