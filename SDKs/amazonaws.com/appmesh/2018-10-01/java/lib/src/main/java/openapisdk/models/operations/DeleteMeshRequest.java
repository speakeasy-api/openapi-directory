package openapisdk.models.operations;



public class DeleteMeshRequest {
    public DeleteMeshPathParams pathParams;
    public DeleteMeshRequest withPathParams(DeleteMeshPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteMeshHeaders headers;
    public DeleteMeshRequest withHeaders(DeleteMeshHeaders headers) {
        this.headers = headers;
        return this;
    }
}