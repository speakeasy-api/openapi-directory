package openapisdk.models.operations;



public class AccountInstitutionCurationCommentsRequest {
    public AccountInstitutionCurationCommentsPathParams pathParams;
    public AccountInstitutionCurationCommentsRequest withPathParams(AccountInstitutionCurationCommentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccountInstitutionCurationCommentsQueryParams queryParams;
    public AccountInstitutionCurationCommentsRequest withQueryParams(AccountInstitutionCurationCommentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AccountInstitutionCurationCommentsSecurity security;
    public AccountInstitutionCurationCommentsRequest withSecurity(AccountInstitutionCurationCommentsSecurity security) {
        this.security = security;
        return this;
    }
}