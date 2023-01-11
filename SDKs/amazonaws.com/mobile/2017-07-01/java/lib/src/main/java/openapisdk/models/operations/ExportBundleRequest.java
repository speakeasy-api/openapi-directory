package openapisdk.models.operations;



public class ExportBundleRequest {
    public ExportBundlePathParams pathParams;
    public ExportBundleRequest withPathParams(ExportBundlePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ExportBundleQueryParams queryParams;
    public ExportBundleRequest withQueryParams(ExportBundleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportBundleHeaders headers;
    public ExportBundleRequest withHeaders(ExportBundleHeaders headers) {
        this.headers = headers;
        return this;
    }
}