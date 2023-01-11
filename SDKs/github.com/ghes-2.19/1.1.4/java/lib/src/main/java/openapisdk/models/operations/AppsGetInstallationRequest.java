package openapisdk.models.operations;



public class AppsGetInstallationRequest {
    public AppsGetInstallationPathParams pathParams;
    public AppsGetInstallationRequest withPathParams(AppsGetInstallationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppsGetInstallationHeaders headers;
    public AppsGetInstallationRequest withHeaders(AppsGetInstallationHeaders headers) {
        this.headers = headers;
        return this;
    }
}