package openapisdk.models.operations;



public class TerminateWorkspacesResponse {
    public String contentType;
    public TerminateWorkspacesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TerminateWorkspacesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TerminateWorkspacesResult terminateWorkspacesResult;
    public TerminateWorkspacesResponse withTerminateWorkspacesResult(openapisdk.models.shared.TerminateWorkspacesResult terminateWorkspacesResult) {
        this.terminateWorkspacesResult = terminateWorkspacesResult;
        return this;
    }
}