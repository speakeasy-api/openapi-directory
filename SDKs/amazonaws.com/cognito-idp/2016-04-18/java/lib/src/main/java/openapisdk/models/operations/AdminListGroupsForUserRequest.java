package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminListGroupsForUserRequest {
    public AdminListGroupsForUserQueryParams queryParams;
    public AdminListGroupsForUserRequest withQueryParams(AdminListGroupsForUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AdminListGroupsForUserHeaders headers;
    public AdminListGroupsForUserRequest withHeaders(AdminListGroupsForUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminListGroupsForUserRequest request;
    public AdminListGroupsForUserRequest withRequest(openapisdk.models.shared.AdminListGroupsForUserRequest request) {
        this.request = request;
        return this;
    }
}