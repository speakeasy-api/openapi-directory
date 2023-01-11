package openapisdk.models.operations;



public class GetPirateTranslateRequest {
    public GetPirateTranslateQueryParams queryParams;
    public GetPirateTranslateRequest withQueryParams(GetPirateTranslateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPirateTranslateSecurity security;
    public GetPirateTranslateRequest withSecurity(GetPirateTranslateSecurity security) {
        this.security = security;
        return this;
    }
}