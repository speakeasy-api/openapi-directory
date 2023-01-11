package openapisdk.models.operations;



public class DepartmentsAllRequest {
    public DepartmentsAllQueryParams queryParams;
    public DepartmentsAllRequest withQueryParams(DepartmentsAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DepartmentsAllHeaders headers;
    public DepartmentsAllRequest withHeaders(DepartmentsAllHeaders headers) {
        this.headers = headers;
        return this;
    }
    public DepartmentsAllSecurity security;
    public DepartmentsAllRequest withSecurity(DepartmentsAllSecurity security) {
        this.security = security;
        return this;
    }
}