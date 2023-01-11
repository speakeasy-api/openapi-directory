package openapisdk.models.operations;



public class GetEventSourceRequest {
    public GetEventSourcePathParams pathParams;
    public GetEventSourceRequest withPathParams(GetEventSourcePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEventSourceHeaders headers;
    public GetEventSourceRequest withHeaders(GetEventSourceHeaders headers) {
        this.headers = headers;
        return this;
    }
}