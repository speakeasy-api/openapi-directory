package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminRemoveUserFromGroupRequest {
    public AdminRemoveUserFromGroupHeaders headers;
    public AdminRemoveUserFromGroupRequest withHeaders(AdminRemoveUserFromGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminRemoveUserFromGroupRequest request;
    public AdminRemoveUserFromGroupRequest withRequest(openapisdk.models.shared.AdminRemoveUserFromGroupRequest request) {
        this.request = request;
        return this;
    }
}