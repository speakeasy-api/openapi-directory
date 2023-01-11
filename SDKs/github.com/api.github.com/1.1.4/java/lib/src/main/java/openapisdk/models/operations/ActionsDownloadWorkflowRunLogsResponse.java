package openapisdk.models.operations;



public class ActionsDownloadWorkflowRunLogsResponse {
    public String contentType;
    public ActionsDownloadWorkflowRunLogsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActionsDownloadWorkflowRunLogsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ActionsDownloadWorkflowRunLogsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}