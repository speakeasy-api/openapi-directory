package openapisdk.models.operations;



public class DeleteAliasRequest {
    public DeleteAliasPathParams pathParams;
    public DeleteAliasRequest withPathParams(DeleteAliasPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteAliasHeaders headers;
    public DeleteAliasRequest withHeaders(DeleteAliasHeaders headers) {
        this.headers = headers;
        return this;
    }
}