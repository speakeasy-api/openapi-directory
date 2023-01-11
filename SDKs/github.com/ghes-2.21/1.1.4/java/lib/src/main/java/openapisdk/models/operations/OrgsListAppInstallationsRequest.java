package openapisdk.models.operations;



public class OrgsListAppInstallationsRequest {
    public OrgsListAppInstallationsPathParams pathParams;
    public OrgsListAppInstallationsRequest withPathParams(OrgsListAppInstallationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OrgsListAppInstallationsQueryParams queryParams;
    public OrgsListAppInstallationsRequest withQueryParams(OrgsListAppInstallationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public OrgsListAppInstallationsHeaders headers;
    public OrgsListAppInstallationsRequest withHeaders(OrgsListAppInstallationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}