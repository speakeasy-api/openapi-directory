package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminUpdateUserAttributesRequest {
    public AdminUpdateUserAttributesHeaders headers;
    public AdminUpdateUserAttributesRequest withHeaders(AdminUpdateUserAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminUpdateUserAttributesRequest request;
    public AdminUpdateUserAttributesRequest withRequest(openapisdk.models.shared.AdminUpdateUserAttributesRequest request) {
        this.request = request;
        return this;
    }
}