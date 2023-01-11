package openapisdk.models.operations;



public class SecretScanningListAlertsForRepoRequest {
    public SecretScanningListAlertsForRepoPathParams pathParams;
    public SecretScanningListAlertsForRepoRequest withPathParams(SecretScanningListAlertsForRepoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecretScanningListAlertsForRepoQueryParams queryParams;
    public SecretScanningListAlertsForRepoRequest withQueryParams(SecretScanningListAlertsForRepoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}