package openapisdk.models.operations;



public class CustomVitalsListRequest {
    public CustomVitalsListQueryParams queryParams;
    public CustomVitalsListRequest withQueryParams(CustomVitalsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CustomVitalsListSecurity security;
    public CustomVitalsListRequest withSecurity(CustomVitalsListSecurity security) {
        this.security = security;
        return this;
    }
}