package openapisdk.models.operations;



public class GetRetainedMessageRequest {
    public GetRetainedMessagePathParams pathParams;
    public GetRetainedMessageRequest withPathParams(GetRetainedMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetRetainedMessageHeaders headers;
    public GetRetainedMessageRequest withHeaders(GetRetainedMessageHeaders headers) {
        this.headers = headers;
        return this;
    }
}