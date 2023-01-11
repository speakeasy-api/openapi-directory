package openapisdk.models.operations;



public class ExportApiRequest {
    public ExportApiPathParams pathParams;
    public ExportApiRequest withPathParams(ExportApiPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ExportApiQueryParams queryParams;
    public ExportApiRequest withQueryParams(ExportApiQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportApiHeaders headers;
    public ExportApiRequest withHeaders(ExportApiHeaders headers) {
        this.headers = headers;
        return this;
    }
}