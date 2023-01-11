package openapisdk.models.operations;



public class GetListQueuesRequest {
    public GetListQueuesQueryParams queryParams;
    public GetListQueuesRequest withQueryParams(GetListQueuesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListQueuesHeaders headers;
    public GetListQueuesRequest withHeaders(GetListQueuesHeaders headers) {
        this.headers = headers;
        return this;
    }
}