package openapisdk.models.operations;



public class GetDatasetContentResponse {
    public String contentType;
    public GetDatasetContentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDatasetContentResponse getDatasetContentResponse;
    public GetDatasetContentResponse withGetDatasetContentResponse(openapisdk.models.shared.GetDatasetContentResponse getDatasetContentResponse) {
        this.getDatasetContentResponse = getDatasetContentResponse;
        return this;
    }
    public Object internalFailureException;
    public GetDatasetContentResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public GetDatasetContentResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetDatasetContentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetDatasetContentResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetDatasetContentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetDatasetContentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}