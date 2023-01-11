package openapisdk.models.operations;



public class InstitutionArticlesRequest {
    public InstitutionArticlesPathParams pathParams;
    public InstitutionArticlesRequest withPathParams(InstitutionArticlesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public InstitutionArticlesQueryParams queryParams;
    public InstitutionArticlesRequest withQueryParams(InstitutionArticlesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}