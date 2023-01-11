package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EmployeesAddRequest {
    public EmployeesAddQueryParams queryParams;
    public EmployeesAddRequest withQueryParams(EmployeesAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EmployeesAddHeaders headers;
    public EmployeesAddRequest withHeaders(EmployeesAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EmployeeInput request;
    public EmployeesAddRequest withRequest(openapisdk.models.shared.EmployeeInput request) {
        this.request = request;
        return this;
    }
    public EmployeesAddSecurity security;
    public EmployeesAddRequest withSecurity(EmployeesAddSecurity security) {
        this.security = security;
        return this;
    }
}