package openapisdk.models.operations;



public class DoctorsReadRequest {
    public DoctorsReadPathParams pathParams;
    public DoctorsReadRequest withPathParams(DoctorsReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DoctorsReadQueryParams queryParams;
    public DoctorsReadRequest withQueryParams(DoctorsReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DoctorsReadSecurity security;
    public DoctorsReadRequest withSecurity(DoctorsReadSecurity security) {
        this.security = security;
        return this;
    }
}