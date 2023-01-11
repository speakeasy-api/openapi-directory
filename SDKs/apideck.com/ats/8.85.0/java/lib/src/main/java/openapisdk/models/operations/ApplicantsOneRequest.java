package openapisdk.models.operations;



public class ApplicantsOneRequest {
    public ApplicantsOnePathParams pathParams;
    public ApplicantsOneRequest withPathParams(ApplicantsOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApplicantsOneQueryParams queryParams;
    public ApplicantsOneRequest withQueryParams(ApplicantsOneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ApplicantsOneHeaders headers;
    public ApplicantsOneRequest withHeaders(ApplicantsOneHeaders headers) {
        this.headers = headers;
        return this;
    }
    public ApplicantsOneSecurity security;
    public ApplicantsOneRequest withSecurity(ApplicantsOneSecurity security) {
        this.security = security;
        return this;
    }
}