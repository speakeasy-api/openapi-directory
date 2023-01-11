package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivesUpdateRequest {
    public DrivesUpdatePathParams pathParams;
    public DrivesUpdateRequest withPathParams(DrivesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DrivesUpdateQueryParams queryParams;
    public DrivesUpdateRequest withQueryParams(DrivesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DrivesUpdateHeaders headers;
    public DrivesUpdateRequest withHeaders(DrivesUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DriveInput request;
    public DrivesUpdateRequest withRequest(openapisdk.models.shared.DriveInput request) {
        this.request = request;
        return this;
    }
    public DrivesUpdateSecurity security;
    public DrivesUpdateRequest withSecurity(DrivesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}