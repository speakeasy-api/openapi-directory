package openapisdk.models.operations;



public class GetListDeadLetterSourceQueuesRequest {
    public GetListDeadLetterSourceQueuesPathParams pathParams;
    public GetListDeadLetterSourceQueuesRequest withPathParams(GetListDeadLetterSourceQueuesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetListDeadLetterSourceQueuesQueryParams queryParams;
    public GetListDeadLetterSourceQueuesRequest withQueryParams(GetListDeadLetterSourceQueuesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListDeadLetterSourceQueuesHeaders headers;
    public GetListDeadLetterSourceQueuesRequest withHeaders(GetListDeadLetterSourceQueuesHeaders headers) {
        this.headers = headers;
        return this;
    }
}