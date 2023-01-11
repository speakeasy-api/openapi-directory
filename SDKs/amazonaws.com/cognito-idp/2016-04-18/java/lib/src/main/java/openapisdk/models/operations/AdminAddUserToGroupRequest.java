package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminAddUserToGroupRequest {
    public AdminAddUserToGroupHeaders headers;
    public AdminAddUserToGroupRequest withHeaders(AdminAddUserToGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminAddUserToGroupRequest request;
    public AdminAddUserToGroupRequest withRequest(openapisdk.models.shared.AdminAddUserToGroupRequest request) {
        this.request = request;
        return this;
    }
}