package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminEnableUserRequest {
    public AdminEnableUserHeaders headers;
    public AdminEnableUserRequest withHeaders(AdminEnableUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminEnableUserRequest request;
    public AdminEnableUserRequest withRequest(openapisdk.models.shared.AdminEnableUserRequest request) {
        this.request = request;
        return this;
    }
}