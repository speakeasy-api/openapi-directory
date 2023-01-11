package openapisdk.models.operations;



public class GetAliasRequest {
    public GetAliasPathParams pathParams;
    public GetAliasRequest withPathParams(GetAliasPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAliasHeaders headers;
    public GetAliasRequest withHeaders(GetAliasHeaders headers) {
        this.headers = headers;
        return this;
    }
}