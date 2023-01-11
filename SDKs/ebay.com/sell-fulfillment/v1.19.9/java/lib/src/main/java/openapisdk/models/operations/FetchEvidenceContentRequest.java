package openapisdk.models.operations;



public class FetchEvidenceContentRequest {
    public String serverURL;
    public FetchEvidenceContentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchEvidenceContentPathParams pathParams;
    public FetchEvidenceContentRequest withPathParams(FetchEvidenceContentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchEvidenceContentQueryParams queryParams;
    public FetchEvidenceContentRequest withQueryParams(FetchEvidenceContentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FetchEvidenceContentSecurity security;
    public FetchEvidenceContentRequest withSecurity(FetchEvidenceContentSecurity security) {
        this.security = security;
        return this;
    }
}