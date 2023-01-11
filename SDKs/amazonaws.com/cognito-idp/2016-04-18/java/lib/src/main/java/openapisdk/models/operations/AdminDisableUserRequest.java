package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminDisableUserRequest {
    public AdminDisableUserHeaders headers;
    public AdminDisableUserRequest withHeaders(AdminDisableUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminDisableUserRequest request;
    public AdminDisableUserRequest withRequest(openapisdk.models.shared.AdminDisableUserRequest request) {
        this.request = request;
        return this;
    }
}