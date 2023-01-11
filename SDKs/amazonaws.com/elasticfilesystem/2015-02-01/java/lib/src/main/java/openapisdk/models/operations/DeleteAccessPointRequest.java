package openapisdk.models.operations;



public class DeleteAccessPointRequest {
    public DeleteAccessPointPathParams pathParams;
    public DeleteAccessPointRequest withPathParams(DeleteAccessPointPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteAccessPointHeaders headers;
    public DeleteAccessPointRequest withHeaders(DeleteAccessPointHeaders headers) {
        this.headers = headers;
        return this;
    }
}