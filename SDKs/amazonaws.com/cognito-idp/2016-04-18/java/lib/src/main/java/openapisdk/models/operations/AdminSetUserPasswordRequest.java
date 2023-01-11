package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminSetUserPasswordRequest {
    public AdminSetUserPasswordHeaders headers;
    public AdminSetUserPasswordRequest withHeaders(AdminSetUserPasswordHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminSetUserPasswordRequest request;
    public AdminSetUserPasswordRequest withRequest(openapisdk.models.shared.AdminSetUserPasswordRequest request) {
        this.request = request;
        return this;
    }
}