package openapisdk.models.operations;



public class GetEventStreamRequest {
    public GetEventStreamPathParams pathParams;
    public GetEventStreamRequest withPathParams(GetEventStreamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEventStreamHeaders headers;
    public GetEventStreamRequest withHeaders(GetEventStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
}