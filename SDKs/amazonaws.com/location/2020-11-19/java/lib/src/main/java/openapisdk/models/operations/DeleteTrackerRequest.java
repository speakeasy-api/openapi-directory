package openapisdk.models.operations;



public class DeleteTrackerRequest {
    public DeleteTrackerPathParams pathParams;
    public DeleteTrackerRequest withPathParams(DeleteTrackerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteTrackerHeaders headers;
    public DeleteTrackerRequest withHeaders(DeleteTrackerHeaders headers) {
        this.headers = headers;
        return this;
    }
}