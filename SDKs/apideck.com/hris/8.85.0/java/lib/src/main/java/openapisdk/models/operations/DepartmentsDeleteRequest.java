package openapisdk.models.operations;



public class DepartmentsDeleteRequest {
    public DepartmentsDeletePathParams pathParams;
    public DepartmentsDeleteRequest withPathParams(DepartmentsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DepartmentsDeleteQueryParams queryParams;
    public DepartmentsDeleteRequest withQueryParams(DepartmentsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DepartmentsDeleteHeaders headers;
    public DepartmentsDeleteRequest withHeaders(DepartmentsDeleteHeaders headers) {
        this.headers = headers;
        return this;
    }
    public DepartmentsDeleteSecurity security;
    public DepartmentsDeleteRequest withSecurity(DepartmentsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}