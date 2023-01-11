package openapisdk.models.operations;



public class GetAssetPropertyAggregatesResponse {
    public String contentType;
    public GetAssetPropertyAggregatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAssetPropertyAggregatesResponse getAssetPropertyAggregatesResponse;
    public GetAssetPropertyAggregatesResponse withGetAssetPropertyAggregatesResponse(openapisdk.models.shared.GetAssetPropertyAggregatesResponse getAssetPropertyAggregatesResponse) {
        this.getAssetPropertyAggregatesResponse = getAssetPropertyAggregatesResponse;
        return this;
    }
    public Object internalFailureException;
    public GetAssetPropertyAggregatesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public GetAssetPropertyAggregatesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetAssetPropertyAggregatesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetAssetPropertyAggregatesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetAssetPropertyAggregatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetAssetPropertyAggregatesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}