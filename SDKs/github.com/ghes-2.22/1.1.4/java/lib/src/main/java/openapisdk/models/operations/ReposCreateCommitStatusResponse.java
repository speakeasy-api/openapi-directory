package openapisdk.models.operations;



public class ReposCreateCommitStatusResponse {
    public String contentType;
    public ReposCreateCommitStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposCreateCommitStatusResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposCreateCommitStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Status status;
    public ReposCreateCommitStatusResponse withStatus(openapisdk.models.shared.Status status) {
        this.status = status;
        return this;
    }
}