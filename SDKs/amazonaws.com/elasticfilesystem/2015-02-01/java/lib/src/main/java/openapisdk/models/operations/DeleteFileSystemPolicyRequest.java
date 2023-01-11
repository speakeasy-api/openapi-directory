package openapisdk.models.operations;



public class DeleteFileSystemPolicyRequest {
    public DeleteFileSystemPolicyPathParams pathParams;
    public DeleteFileSystemPolicyRequest withPathParams(DeleteFileSystemPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteFileSystemPolicyHeaders headers;
    public DeleteFileSystemPolicyRequest withHeaders(DeleteFileSystemPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
}