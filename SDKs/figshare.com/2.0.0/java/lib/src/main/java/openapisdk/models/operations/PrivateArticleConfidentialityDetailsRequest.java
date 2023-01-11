package openapisdk.models.operations;



public class PrivateArticleConfidentialityDetailsRequest {
    public PrivateArticleConfidentialityDetailsPathParams pathParams;
    public PrivateArticleConfidentialityDetailsRequest withPathParams(PrivateArticleConfidentialityDetailsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateArticleConfidentialityDetailsSecurity security;
    public PrivateArticleConfidentialityDetailsRequest withSecurity(PrivateArticleConfidentialityDetailsSecurity security) {
        this.security = security;
        return this;
    }
}