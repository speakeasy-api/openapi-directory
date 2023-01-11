package openapisdk.models.operations;



public class GetFactOnthisdayBornRequest {
    public GetFactOnthisdayBornQueryParams queryParams;
    public GetFactOnthisdayBornRequest withQueryParams(GetFactOnthisdayBornQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFactOnthisdayBornSecurity security;
    public GetFactOnthisdayBornRequest withSecurity(GetFactOnthisdayBornSecurity security) {
        this.security = security;
        return this;
    }
}