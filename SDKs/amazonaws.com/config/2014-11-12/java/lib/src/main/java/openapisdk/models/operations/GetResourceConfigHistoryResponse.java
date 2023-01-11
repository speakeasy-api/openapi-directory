package openapisdk.models.operations;



public class GetResourceConfigHistoryResponse {
    public String contentType;
    public GetResourceConfigHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetResourceConfigHistoryResponse getResourceConfigHistoryResponse;
    public GetResourceConfigHistoryResponse withGetResourceConfigHistoryResponse(openapisdk.models.shared.GetResourceConfigHistoryResponse getResourceConfigHistoryResponse) {
        this.getResourceConfigHistoryResponse = getResourceConfigHistoryResponse;
        return this;
    }
    public Object invalidLimitException;
    public GetResourceConfigHistoryResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public GetResourceConfigHistoryResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidTimeRangeException;
    public GetResourceConfigHistoryResponse withInvalidTimeRangeException(Object invalidTimeRangeException) {
        this.invalidTimeRangeException = invalidTimeRangeException;
        return this;
    }
    public Object noAvailableConfigurationRecorderException;
    public GetResourceConfigHistoryResponse withNoAvailableConfigurationRecorderException(Object noAvailableConfigurationRecorderException) {
        this.noAvailableConfigurationRecorderException = noAvailableConfigurationRecorderException;
        return this;
    }
    public Object resourceNotDiscoveredException;
    public GetResourceConfigHistoryResponse withResourceNotDiscoveredException(Object resourceNotDiscoveredException) {
        this.resourceNotDiscoveredException = resourceNotDiscoveredException;
        return this;
    }
    public Long statusCode;
    public GetResourceConfigHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetResourceConfigHistoryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}