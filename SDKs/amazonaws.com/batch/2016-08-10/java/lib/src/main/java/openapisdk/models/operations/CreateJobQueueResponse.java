package openapisdk.models.operations;



public class CreateJobQueueResponse {
    public Object clientException;
    public CreateJobQueueResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public CreateJobQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateJobQueueResponse createJobQueueResponse;
    public CreateJobQueueResponse withCreateJobQueueResponse(openapisdk.models.shared.CreateJobQueueResponse createJobQueueResponse) {
        this.createJobQueueResponse = createJobQueueResponse;
        return this;
    }
    public Object serverException;
    public CreateJobQueueResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public CreateJobQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}