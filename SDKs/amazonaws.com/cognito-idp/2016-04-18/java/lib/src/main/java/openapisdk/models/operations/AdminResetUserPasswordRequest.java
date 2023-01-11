package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminResetUserPasswordRequest {
    public AdminResetUserPasswordHeaders headers;
    public AdminResetUserPasswordRequest withHeaders(AdminResetUserPasswordHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminResetUserPasswordRequest request;
    public AdminResetUserPasswordRequest withRequest(openapisdk.models.shared.AdminResetUserPasswordRequest request) {
        this.request = request;
        return this;
    }
}