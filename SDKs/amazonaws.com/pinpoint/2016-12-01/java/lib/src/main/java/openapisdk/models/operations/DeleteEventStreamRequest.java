package openapisdk.models.operations;



public class DeleteEventStreamRequest {
    public DeleteEventStreamPathParams pathParams;
    public DeleteEventStreamRequest withPathParams(DeleteEventStreamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteEventStreamHeaders headers;
    public DeleteEventStreamRequest withHeaders(DeleteEventStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
}