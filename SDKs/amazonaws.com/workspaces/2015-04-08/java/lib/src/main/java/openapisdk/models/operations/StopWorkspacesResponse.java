package openapisdk.models.operations;



public class StopWorkspacesResponse {
    public String contentType;
    public StopWorkspacesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StopWorkspacesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopWorkspacesResult stopWorkspacesResult;
    public StopWorkspacesResponse withStopWorkspacesResult(openapisdk.models.shared.StopWorkspacesResult stopWorkspacesResult) {
        this.stopWorkspacesResult = stopWorkspacesResult;
        return this;
    }
}