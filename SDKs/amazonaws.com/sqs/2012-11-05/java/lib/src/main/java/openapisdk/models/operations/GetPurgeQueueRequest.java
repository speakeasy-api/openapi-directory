package openapisdk.models.operations;



public class GetPurgeQueueRequest {
    public GetPurgeQueuePathParams pathParams;
    public GetPurgeQueueRequest withPathParams(GetPurgeQueuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPurgeQueueQueryParams queryParams;
    public GetPurgeQueueRequest withQueryParams(GetPurgeQueueQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPurgeQueueHeaders headers;
    public GetPurgeQueueRequest withHeaders(GetPurgeQueueHeaders headers) {
        this.headers = headers;
        return this;
    }
}