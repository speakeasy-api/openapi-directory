package openapisdk.models.operations;



public class OfficesReadRequest {
    public OfficesReadPathParams pathParams;
    public OfficesReadRequest withPathParams(OfficesReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OfficesReadQueryParams queryParams;
    public OfficesReadRequest withQueryParams(OfficesReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public OfficesReadSecurity security;
    public OfficesReadRequest withSecurity(OfficesReadSecurity security) {
        this.security = security;
        return this;
    }
}