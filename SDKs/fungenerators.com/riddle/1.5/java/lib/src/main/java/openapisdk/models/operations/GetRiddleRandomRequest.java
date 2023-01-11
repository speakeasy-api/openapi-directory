package openapisdk.models.operations;



public class GetRiddleRandomRequest {
    public GetRiddleRandomQueryParams queryParams;
    public GetRiddleRandomRequest withQueryParams(GetRiddleRandomQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetRiddleRandomSecurity security;
    public GetRiddleRandomRequest withSecurity(GetRiddleRandomSecurity security) {
        this.security = security;
        return this;
    }
}