package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateAdminAccountRequest {
    public DisassociateAdminAccountHeaders headers;
    public DisassociateAdminAccountRequest withHeaders(DisassociateAdminAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DisassociateAdminAccountRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}