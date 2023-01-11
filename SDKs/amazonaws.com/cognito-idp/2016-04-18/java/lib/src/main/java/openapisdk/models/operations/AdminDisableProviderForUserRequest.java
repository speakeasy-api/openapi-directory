package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminDisableProviderForUserRequest {
    public AdminDisableProviderForUserHeaders headers;
    public AdminDisableProviderForUserRequest withHeaders(AdminDisableProviderForUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminDisableProviderForUserRequest request;
    public AdminDisableProviderForUserRequest withRequest(openapisdk.models.shared.AdminDisableProviderForUserRequest request) {
        this.request = request;
        return this;
    }
}