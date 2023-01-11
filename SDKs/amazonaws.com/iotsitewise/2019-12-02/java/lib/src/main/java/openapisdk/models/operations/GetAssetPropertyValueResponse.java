package openapisdk.models.operations;



public class GetAssetPropertyValueResponse {
    public String contentType;
    public GetAssetPropertyValueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAssetPropertyValueResponse getAssetPropertyValueResponse;
    public GetAssetPropertyValueResponse withGetAssetPropertyValueResponse(openapisdk.models.shared.GetAssetPropertyValueResponse getAssetPropertyValueResponse) {
        this.getAssetPropertyValueResponse = getAssetPropertyValueResponse;
        return this;
    }
    public Object internalFailureException;
    public GetAssetPropertyValueResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public GetAssetPropertyValueResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetAssetPropertyValueResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetAssetPropertyValueResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetAssetPropertyValueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetAssetPropertyValueResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}