package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EmployeesUpdateRequest {
    public EmployeesUpdatePathParams pathParams;
    public EmployeesUpdateRequest withPathParams(EmployeesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EmployeesUpdateQueryParams queryParams;
    public EmployeesUpdateRequest withQueryParams(EmployeesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EmployeesUpdateHeaders headers;
    public EmployeesUpdateRequest withHeaders(EmployeesUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EmployeeInput request;
    public EmployeesUpdateRequest withRequest(openapisdk.models.shared.EmployeeInput request) {
        this.request = request;
        return this;
    }
    public EmployeesUpdateSecurity security;
    public EmployeesUpdateRequest withSecurity(EmployeesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}