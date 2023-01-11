package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveGroupsUpdateRequest {
    public DriveGroupsUpdatePathParams pathParams;
    public DriveGroupsUpdateRequest withPathParams(DriveGroupsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveGroupsUpdateQueryParams queryParams;
    public DriveGroupsUpdateRequest withQueryParams(DriveGroupsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveGroupsUpdateHeaders headers;
    public DriveGroupsUpdateRequest withHeaders(DriveGroupsUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DriveGroupInput request;
    public DriveGroupsUpdateRequest withRequest(openapisdk.models.shared.DriveGroupInput request) {
        this.request = request;
        return this;
    }
    public DriveGroupsUpdateSecurity security;
    public DriveGroupsUpdateRequest withSecurity(DriveGroupsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}