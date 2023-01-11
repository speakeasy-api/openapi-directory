package openapisdk.models.operations;



public class ListActiveViolationsRequest {
    public ListActiveViolationsQueryParams queryParams;
    public ListActiveViolationsRequest withQueryParams(ListActiveViolationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListActiveViolationsHeaders headers;
    public ListActiveViolationsRequest withHeaders(ListActiveViolationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}