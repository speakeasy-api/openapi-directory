package openapisdk.models.operations;



public class PrivateArticleReserveHandleRequest {
    public PrivateArticleReserveHandlePathParams pathParams;
    public PrivateArticleReserveHandleRequest withPathParams(PrivateArticleReserveHandlePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateArticleReserveHandleSecurity security;
    public PrivateArticleReserveHandleRequest withSecurity(PrivateArticleReserveHandleSecurity security) {
        this.security = security;
        return this;
    }
}