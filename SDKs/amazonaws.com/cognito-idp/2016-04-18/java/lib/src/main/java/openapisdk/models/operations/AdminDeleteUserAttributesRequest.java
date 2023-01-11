package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminDeleteUserAttributesRequest {
    public AdminDeleteUserAttributesHeaders headers;
    public AdminDeleteUserAttributesRequest withHeaders(AdminDeleteUserAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminDeleteUserAttributesRequest request;
    public AdminDeleteUserAttributesRequest withRequest(openapisdk.models.shared.AdminDeleteUserAttributesRequest request) {
        this.request = request;
        return this;
    }
}