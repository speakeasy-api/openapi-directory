package openapisdk.models.operations;



public class GetDeleteMessageRequest {
    public GetDeleteMessagePathParams pathParams;
    public GetDeleteMessageRequest withPathParams(GetDeleteMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDeleteMessageQueryParams queryParams;
    public GetDeleteMessageRequest withQueryParams(GetDeleteMessageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDeleteMessageHeaders headers;
    public GetDeleteMessageRequest withHeaders(GetDeleteMessageHeaders headers) {
        this.headers = headers;
        return this;
    }
}