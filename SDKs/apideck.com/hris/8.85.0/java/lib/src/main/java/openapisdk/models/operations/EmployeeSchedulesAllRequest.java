package openapisdk.models.operations;



public class EmployeeSchedulesAllRequest {
    public EmployeeSchedulesAllPathParams pathParams;
    public EmployeeSchedulesAllRequest withPathParams(EmployeeSchedulesAllPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EmployeeSchedulesAllQueryParams queryParams;
    public EmployeeSchedulesAllRequest withQueryParams(EmployeeSchedulesAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EmployeeSchedulesAllHeaders headers;
    public EmployeeSchedulesAllRequest withHeaders(EmployeeSchedulesAllHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EmployeeSchedulesAllSecurity security;
    public EmployeeSchedulesAllRequest withSecurity(EmployeeSchedulesAllSecurity security) {
        this.security = security;
        return this;
    }
}