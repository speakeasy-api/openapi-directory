package openapisdk.models.operations;



public class GetInterpolatedAssetPropertyValuesResponse {
    public String contentType;
    public GetInterpolatedAssetPropertyValuesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetInterpolatedAssetPropertyValuesResponse getInterpolatedAssetPropertyValuesResponse;
    public GetInterpolatedAssetPropertyValuesResponse withGetInterpolatedAssetPropertyValuesResponse(openapisdk.models.shared.GetInterpolatedAssetPropertyValuesResponse getInterpolatedAssetPropertyValuesResponse) {
        this.getInterpolatedAssetPropertyValuesResponse = getInterpolatedAssetPropertyValuesResponse;
        return this;
    }
    public Object internalFailureException;
    public GetInterpolatedAssetPropertyValuesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public GetInterpolatedAssetPropertyValuesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetInterpolatedAssetPropertyValuesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetInterpolatedAssetPropertyValuesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetInterpolatedAssetPropertyValuesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetInterpolatedAssetPropertyValuesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}