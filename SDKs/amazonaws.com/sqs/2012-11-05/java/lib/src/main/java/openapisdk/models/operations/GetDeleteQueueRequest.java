package openapisdk.models.operations;



public class GetDeleteQueueRequest {
    public GetDeleteQueuePathParams pathParams;
    public GetDeleteQueueRequest withPathParams(GetDeleteQueuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDeleteQueueQueryParams queryParams;
    public GetDeleteQueueRequest withQueryParams(GetDeleteQueueQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDeleteQueueHeaders headers;
    public GetDeleteQueueRequest withHeaders(GetDeleteQueueHeaders headers) {
        this.headers = headers;
        return this;
    }
}