package openapisdk.models.operations;



public class ListJobExecutionsForJobResponse {
    public String contentType;
    public ListJobExecutionsForJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRequestException;
    public ListJobExecutionsForJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListJobExecutionsForJobResponse listJobExecutionsForJobResponse;
    public ListJobExecutionsForJobResponse withListJobExecutionsForJobResponse(openapisdk.models.shared.ListJobExecutionsForJobResponse listJobExecutionsForJobResponse) {
        this.listJobExecutionsForJobResponse = listJobExecutionsForJobResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListJobExecutionsForJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListJobExecutionsForJobResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListJobExecutionsForJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListJobExecutionsForJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}