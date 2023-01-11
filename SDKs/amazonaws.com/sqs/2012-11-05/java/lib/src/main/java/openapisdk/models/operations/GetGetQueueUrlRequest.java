package openapisdk.models.operations;



public class GetGetQueueUrlRequest {
    public GetGetQueueUrlQueryParams queryParams;
    public GetGetQueueUrlRequest withQueryParams(GetGetQueueUrlQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetGetQueueUrlHeaders headers;
    public GetGetQueueUrlRequest withHeaders(GetGetQueueUrlHeaders headers) {
        this.headers = headers;
        return this;
    }
}