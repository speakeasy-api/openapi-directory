package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DepartmentsUpdateRequest {
    public DepartmentsUpdatePathParams pathParams;
    public DepartmentsUpdateRequest withPathParams(DepartmentsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DepartmentsUpdateQueryParams queryParams;
    public DepartmentsUpdateRequest withQueryParams(DepartmentsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DepartmentsUpdateHeaders headers;
    public DepartmentsUpdateRequest withHeaders(DepartmentsUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DepartmentInput request;
    public DepartmentsUpdateRequest withRequest(openapisdk.models.shared.DepartmentInput request) {
        this.request = request;
        return this;
    }
    public DepartmentsUpdateSecurity security;
    public DepartmentsUpdateRequest withSecurity(DepartmentsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}