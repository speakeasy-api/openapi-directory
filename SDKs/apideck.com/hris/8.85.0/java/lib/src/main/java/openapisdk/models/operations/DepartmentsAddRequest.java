package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DepartmentsAddRequest {
    public DepartmentsAddQueryParams queryParams;
    public DepartmentsAddRequest withQueryParams(DepartmentsAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DepartmentsAddHeaders headers;
    public DepartmentsAddRequest withHeaders(DepartmentsAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DepartmentInput request;
    public DepartmentsAddRequest withRequest(openapisdk.models.shared.DepartmentInput request) {
        this.request = request;
        return this;
    }
    public DepartmentsAddSecurity security;
    public DepartmentsAddRequest withSecurity(DepartmentsAddSecurity security) {
        this.security = security;
        return this;
    }
}