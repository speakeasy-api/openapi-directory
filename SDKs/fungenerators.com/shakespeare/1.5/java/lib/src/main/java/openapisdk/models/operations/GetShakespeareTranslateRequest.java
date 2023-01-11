package openapisdk.models.operations;



public class GetShakespeareTranslateRequest {
    public GetShakespeareTranslateQueryParams queryParams;
    public GetShakespeareTranslateRequest withQueryParams(GetShakespeareTranslateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetShakespeareTranslateSecurity security;
    public GetShakespeareTranslateRequest withSecurity(GetShakespeareTranslateSecurity security) {
        this.security = security;
        return this;
    }
}