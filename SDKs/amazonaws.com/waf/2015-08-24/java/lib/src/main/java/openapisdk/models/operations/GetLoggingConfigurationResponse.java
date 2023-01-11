package openapisdk.models.operations;



public class GetLoggingConfigurationResponse {
    public String contentType;
    public GetLoggingConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLoggingConfigurationResponse getLoggingConfigurationResponse;
    public GetLoggingConfigurationResponse withGetLoggingConfigurationResponse(openapisdk.models.shared.GetLoggingConfigurationResponse getLoggingConfigurationResponse) {
        this.getLoggingConfigurationResponse = getLoggingConfigurationResponse;
        return this;
    }
    public Long statusCode;
    public GetLoggingConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public GetLoggingConfigurationResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafNonexistentItemException;
    public GetLoggingConfigurationResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
}