package openapisdk.models.operations;



public class GetIndexingConfigurationResponse {
    public String contentType;
    public GetIndexingConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetIndexingConfigurationResponse getIndexingConfigurationResponse;
    public GetIndexingConfigurationResponse withGetIndexingConfigurationResponse(openapisdk.models.shared.GetIndexingConfigurationResponse getIndexingConfigurationResponse) {
        this.getIndexingConfigurationResponse = getIndexingConfigurationResponse;
        return this;
    }
    public Object internalFailureException;
    public GetIndexingConfigurationResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public GetIndexingConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetIndexingConfigurationResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetIndexingConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetIndexingConfigurationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public GetIndexingConfigurationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}