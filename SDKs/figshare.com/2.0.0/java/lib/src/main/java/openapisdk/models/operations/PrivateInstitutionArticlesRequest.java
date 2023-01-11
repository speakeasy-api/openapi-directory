package openapisdk.models.operations;



public class PrivateInstitutionArticlesRequest {
    public PrivateInstitutionArticlesQueryParams queryParams;
    public PrivateInstitutionArticlesRequest withQueryParams(PrivateInstitutionArticlesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PrivateInstitutionArticlesSecurity security;
    public PrivateInstitutionArticlesRequest withSecurity(PrivateInstitutionArticlesSecurity security) {
        this.security = security;
        return this;
    }
}