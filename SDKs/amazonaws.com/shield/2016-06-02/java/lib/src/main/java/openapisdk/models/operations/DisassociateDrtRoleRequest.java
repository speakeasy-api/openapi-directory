package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateDrtRoleRequest {
    public DisassociateDrtRoleHeaders headers;
    public DisassociateDrtRoleRequest withHeaders(DisassociateDrtRoleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DisassociateDrtRoleRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}