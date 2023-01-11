package openapisdk.models.operations;



public class DeleteFileSystemRequest {
    public DeleteFileSystemPathParams pathParams;
    public DeleteFileSystemRequest withPathParams(DeleteFileSystemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteFileSystemHeaders headers;
    public DeleteFileSystemRequest withHeaders(DeleteFileSystemHeaders headers) {
        this.headers = headers;
        return this;
    }
}