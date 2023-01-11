package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveGroupsAddRequest {
    public DriveGroupsAddQueryParams queryParams;
    public DriveGroupsAddRequest withQueryParams(DriveGroupsAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveGroupsAddHeaders headers;
    public DriveGroupsAddRequest withHeaders(DriveGroupsAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DriveGroupInput request;
    public DriveGroupsAddRequest withRequest(openapisdk.models.shared.DriveGroupInput request) {
        this.request = request;
        return this;
    }
    public DriveGroupsAddSecurity security;
    public DriveGroupsAddRequest withSecurity(DriveGroupsAddSecurity security) {
        this.security = security;
        return this;
    }
}