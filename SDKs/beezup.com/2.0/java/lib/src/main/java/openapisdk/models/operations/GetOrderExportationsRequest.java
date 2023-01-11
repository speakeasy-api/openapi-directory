package openapisdk.models.operations;



public class GetOrderExportationsRequest {
    public GetOrderExportationsQueryParams queryParams;
    public GetOrderExportationsRequest withQueryParams(GetOrderExportationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetOrderExportationsHeaders headers;
    public GetOrderExportationsRequest withHeaders(GetOrderExportationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}