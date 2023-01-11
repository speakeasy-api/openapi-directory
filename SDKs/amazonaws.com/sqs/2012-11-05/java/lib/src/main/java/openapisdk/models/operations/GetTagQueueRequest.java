package openapisdk.models.operations;



public class GetTagQueueRequest {
    public GetTagQueuePathParams pathParams;
    public GetTagQueueRequest withPathParams(GetTagQueuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTagQueueQueryParams queryParams;
    public GetTagQueueRequest withQueryParams(GetTagQueueQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTagQueueHeaders headers;
    public GetTagQueueRequest withHeaders(GetTagQueueHeaders headers) {
        this.headers = headers;
        return this;
    }
}