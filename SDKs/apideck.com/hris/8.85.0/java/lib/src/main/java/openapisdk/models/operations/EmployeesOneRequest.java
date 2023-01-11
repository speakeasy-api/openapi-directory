package openapisdk.models.operations;



public class EmployeesOneRequest {
    public EmployeesOnePathParams pathParams;
    public EmployeesOneRequest withPathParams(EmployeesOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EmployeesOneQueryParams queryParams;
    public EmployeesOneRequest withQueryParams(EmployeesOneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EmployeesOneHeaders headers;
    public EmployeesOneRequest withHeaders(EmployeesOneHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EmployeesOneSecurity security;
    public EmployeesOneRequest withSecurity(EmployeesOneSecurity security) {
        this.security = security;
        return this;
    }
}