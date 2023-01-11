package openapisdk.models.operations;



public class ReposListCommitStatusesForRefResponse {
    public String contentType;
    public ReposListCommitStatusesForRefResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposListCommitStatusesForRefResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposListCommitStatusesForRefResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Status[] statuses;
    public ReposListCommitStatusesForRefResponse withStatuses(openapisdk.models.shared.Status[] statuses) {
        this.statuses = statuses;
        return this;
    }
}