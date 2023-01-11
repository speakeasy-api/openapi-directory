package openapisdk.models.operations;



public class DeleteSegmentRequest {
    public DeleteSegmentPathParams pathParams;
    public DeleteSegmentRequest withPathParams(DeleteSegmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSegmentHeaders headers;
    public DeleteSegmentRequest withHeaders(DeleteSegmentHeaders headers) {
        this.headers = headers;
        return this;
    }
}