package openapisdk.models.operations;



public class OfficesListRequest {
    public OfficesListQueryParams queryParams;
    public OfficesListRequest withQueryParams(OfficesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public OfficesListSecurity security;
    public OfficesListRequest withSecurity(OfficesListSecurity security) {
        this.security = security;
        return this;
    }
}