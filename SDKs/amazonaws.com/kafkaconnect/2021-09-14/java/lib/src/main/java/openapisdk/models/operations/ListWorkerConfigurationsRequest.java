package openapisdk.models.operations;



public class ListWorkerConfigurationsRequest {
    public ListWorkerConfigurationsQueryParams queryParams;
    public ListWorkerConfigurationsRequest withQueryParams(ListWorkerConfigurationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListWorkerConfigurationsHeaders headers;
    public ListWorkerConfigurationsRequest withHeaders(ListWorkerConfigurationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}