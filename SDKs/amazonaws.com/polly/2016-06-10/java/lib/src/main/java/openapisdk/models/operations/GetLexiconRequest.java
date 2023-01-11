package openapisdk.models.operations;



public class GetLexiconRequest {
    public GetLexiconPathParams pathParams;
    public GetLexiconRequest withPathParams(GetLexiconPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetLexiconHeaders headers;
    public GetLexiconRequest withHeaders(GetLexiconHeaders headers) {
        this.headers = headers;
        return this;
    }
}