package openapisdk.models.operations;



public class StartWorkspacesResponse {
    public String contentType;
    public StartWorkspacesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.StartWorkspacesResult startWorkspacesResult;
    public StartWorkspacesResponse withStartWorkspacesResult(openapisdk.models.shared.StartWorkspacesResult startWorkspacesResult) {
        this.startWorkspacesResult = startWorkspacesResult;
        return this;
    }
    public Long statusCode;
    public StartWorkspacesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}