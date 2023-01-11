package openapisdk.models.operations;



public class DeleteStudioRequest {
    public DeleteStudioPathParams pathParams;
    public DeleteStudioRequest withPathParams(DeleteStudioPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteStudioHeaders headers;
    public DeleteStudioRequest withHeaders(DeleteStudioHeaders headers) {
        this.headers = headers;
        return this;
    }
}