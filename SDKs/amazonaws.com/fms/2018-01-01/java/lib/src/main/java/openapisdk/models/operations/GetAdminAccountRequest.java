package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAdminAccountRequest {
    public GetAdminAccountHeaders headers;
    public GetAdminAccountRequest withHeaders(GetAdminAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public GetAdminAccountRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}