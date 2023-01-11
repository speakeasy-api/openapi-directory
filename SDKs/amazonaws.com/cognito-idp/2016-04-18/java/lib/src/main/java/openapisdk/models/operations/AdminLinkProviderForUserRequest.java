package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminLinkProviderForUserRequest {
    public AdminLinkProviderForUserHeaders headers;
    public AdminLinkProviderForUserRequest withHeaders(AdminLinkProviderForUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminLinkProviderForUserRequest request;
    public AdminLinkProviderForUserRequest withRequest(openapisdk.models.shared.AdminLinkProviderForUserRequest request) {
        this.request = request;
        return this;
    }
}