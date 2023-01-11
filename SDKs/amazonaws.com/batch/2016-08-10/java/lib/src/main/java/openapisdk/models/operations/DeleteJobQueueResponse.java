package openapisdk.models.operations;



public class DeleteJobQueueResponse {
    public Object clientException;
    public DeleteJobQueueResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DeleteJobQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteJobQueueResponse;
    public DeleteJobQueueResponse withDeleteJobQueueResponse(java.util.Map<String, Object> deleteJobQueueResponse) {
        this.deleteJobQueueResponse = deleteJobQueueResponse;
        return this;
    }
    public Object serverException;
    public DeleteJobQueueResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DeleteJobQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}