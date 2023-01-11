package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminUserGlobalSignOutRequest {
    public AdminUserGlobalSignOutHeaders headers;
    public AdminUserGlobalSignOutRequest withHeaders(AdminUserGlobalSignOutHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminUserGlobalSignOutRequest request;
    public AdminUserGlobalSignOutRequest withRequest(openapisdk.models.shared.AdminUserGlobalSignOutRequest request) {
        this.request = request;
        return this;
    }
}