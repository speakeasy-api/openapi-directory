package openapisdk.models.operations;



public class ListMultipartUploadsRequest {
    public ListMultipartUploadsPathParams pathParams;
    public ListMultipartUploadsRequest withPathParams(ListMultipartUploadsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListMultipartUploadsQueryParams queryParams;
    public ListMultipartUploadsRequest withQueryParams(ListMultipartUploadsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMultipartUploadsHeaders headers;
    public ListMultipartUploadsRequest withHeaders(ListMultipartUploadsHeaders headers) {
        this.headers = headers;
        return this;
    }
}