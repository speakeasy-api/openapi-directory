package openapisdk.models.operations;



public class PollForTaskResponse {
    public String contentType;
    public PollForTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public PollForTaskResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public PollForTaskResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.PollForTaskOutput pollForTaskOutput;
    public PollForTaskResponse withPollForTaskOutput(openapisdk.models.shared.PollForTaskOutput pollForTaskOutput) {
        this.pollForTaskOutput = pollForTaskOutput;
        return this;
    }
    public Long statusCode;
    public PollForTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object taskNotFoundException;
    public PollForTaskResponse withTaskNotFoundException(Object taskNotFoundException) {
        this.taskNotFoundException = taskNotFoundException;
        return this;
    }
}