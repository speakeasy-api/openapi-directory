package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivesAddRequest {
    public DrivesAddQueryParams queryParams;
    public DrivesAddRequest withQueryParams(DrivesAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DrivesAddHeaders headers;
    public DrivesAddRequest withHeaders(DrivesAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DriveInput request;
    public DrivesAddRequest withRequest(openapisdk.models.shared.DriveInput request) {
        this.request = request;
        return this;
    }
    public DrivesAddSecurity security;
    public DrivesAddRequest withSecurity(DrivesAddSecurity security) {
        this.security = security;
        return this;
    }
}