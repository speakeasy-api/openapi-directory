package openapisdk.models.operations;



public class RebootWorkspacesResponse {
    public String contentType;
    public RebootWorkspacesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RebootWorkspacesResult rebootWorkspacesResult;
    public RebootWorkspacesResponse withRebootWorkspacesResult(openapisdk.models.shared.RebootWorkspacesResult rebootWorkspacesResult) {
        this.rebootWorkspacesResult = rebootWorkspacesResult;
        return this;
    }
    public Long statusCode;
    public RebootWorkspacesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}