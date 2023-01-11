package openapisdk.models.operations;



public class GetCreateQueueRequest {
    public GetCreateQueueQueryParams queryParams;
    public GetCreateQueueRequest withQueryParams(GetCreateQueueQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCreateQueueHeaders headers;
    public GetCreateQueueRequest withHeaders(GetCreateQueueHeaders headers) {
        this.headers = headers;
        return this;
    }
}