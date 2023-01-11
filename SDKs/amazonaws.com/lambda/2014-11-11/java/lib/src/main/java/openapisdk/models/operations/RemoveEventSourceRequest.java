package openapisdk.models.operations;



public class RemoveEventSourceRequest {
    public RemoveEventSourcePathParams pathParams;
    public RemoveEventSourceRequest withPathParams(RemoveEventSourcePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveEventSourceHeaders headers;
    public RemoveEventSourceRequest withHeaders(RemoveEventSourceHeaders headers) {
        this.headers = headers;
        return this;
    }
}