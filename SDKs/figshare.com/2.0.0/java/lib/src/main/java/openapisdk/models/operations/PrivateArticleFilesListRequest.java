package openapisdk.models.operations;



public class PrivateArticleFilesListRequest {
    public PrivateArticleFilesListPathParams pathParams;
    public PrivateArticleFilesListRequest withPathParams(PrivateArticleFilesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateArticleFilesListSecurity security;
    public PrivateArticleFilesListRequest withSecurity(PrivateArticleFilesListSecurity security) {
        this.security = security;
        return this;
    }
}