package openapisdk.models.operations;



public class UpdateJobQueueResponse {
    public Object clientException;
    public UpdateJobQueueResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public UpdateJobQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object serverException;
    public UpdateJobQueueResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public UpdateJobQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateJobQueueResponse updateJobQueueResponse;
    public UpdateJobQueueResponse withUpdateJobQueueResponse(openapisdk.models.shared.UpdateJobQueueResponse updateJobQueueResponse) {
        this.updateJobQueueResponse = updateJobQueueResponse;
        return this;
    }
}