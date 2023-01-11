package openapisdk.models.operations;



public class CreateDatasetContentResponse {
    public String contentType;
    public CreateDatasetContentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDatasetContentResponse createDatasetContentResponse;
    public CreateDatasetContentResponse withCreateDatasetContentResponse(openapisdk.models.shared.CreateDatasetContentResponse createDatasetContentResponse) {
        this.createDatasetContentResponse = createDatasetContentResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateDatasetContentResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CreateDatasetContentResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateDatasetContentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public CreateDatasetContentResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateDatasetContentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateDatasetContentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}