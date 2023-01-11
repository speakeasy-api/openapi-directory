package openapisdk.models.operations;



public class AppsListInstallationsRequest {
    public AppsListInstallationsQueryParams queryParams;
    public AppsListInstallationsRequest withQueryParams(AppsListInstallationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppsListInstallationsHeaders headers;
    public AppsListInstallationsRequest withHeaders(AppsListInstallationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}