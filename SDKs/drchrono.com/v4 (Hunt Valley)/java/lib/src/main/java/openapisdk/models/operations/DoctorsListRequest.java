package openapisdk.models.operations;



public class DoctorsListRequest {
    public DoctorsListQueryParams queryParams;
    public DoctorsListRequest withQueryParams(DoctorsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DoctorsListSecurity security;
    public DoctorsListRequest withSecurity(DoctorsListSecurity security) {
        this.security = security;
        return this;
    }
}