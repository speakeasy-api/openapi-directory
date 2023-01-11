package openapisdk.models.operations;



public class GetAssetPropertyValueHistoryResponse {
    public String contentType;
    public GetAssetPropertyValueHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAssetPropertyValueHistoryResponse getAssetPropertyValueHistoryResponse;
    public GetAssetPropertyValueHistoryResponse withGetAssetPropertyValueHistoryResponse(openapisdk.models.shared.GetAssetPropertyValueHistoryResponse getAssetPropertyValueHistoryResponse) {
        this.getAssetPropertyValueHistoryResponse = getAssetPropertyValueHistoryResponse;
        return this;
    }
    public Object internalFailureException;
    public GetAssetPropertyValueHistoryResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public GetAssetPropertyValueHistoryResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetAssetPropertyValueHistoryResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetAssetPropertyValueHistoryResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetAssetPropertyValueHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetAssetPropertyValueHistoryResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}