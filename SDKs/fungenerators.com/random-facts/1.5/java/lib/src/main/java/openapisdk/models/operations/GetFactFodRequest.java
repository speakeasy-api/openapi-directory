package openapisdk.models.operations;



public class GetFactFodRequest {
    public GetFactFodQueryParams queryParams;
    public GetFactFodRequest withQueryParams(GetFactFodQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFactFodSecurity security;
    public GetFactFodRequest withSecurity(GetFactFodSecurity security) {
        this.security = security;
        return this;
    }
}