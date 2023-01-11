package openapisdk.models.operations;



public class PutLoggingConfigurationResponse {
    public String contentType;
    public PutLoggingConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PutLoggingConfigurationResponse putLoggingConfigurationResponse;
    public PutLoggingConfigurationResponse withPutLoggingConfigurationResponse(openapisdk.models.shared.PutLoggingConfigurationResponse putLoggingConfigurationResponse) {
        this.putLoggingConfigurationResponse = putLoggingConfigurationResponse;
        return this;
    }
    public Long statusCode;
    public PutLoggingConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public PutLoggingConfigurationResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafNonexistentItemException;
    public PutLoggingConfigurationResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
    public Object wafServiceLinkedRoleErrorException;
    public PutLoggingConfigurationResponse withWafServiceLinkedRoleErrorException(Object wafServiceLinkedRoleErrorException) {
        this.wafServiceLinkedRoleErrorException = wafServiceLinkedRoleErrorException;
        return this;
    }
    public Object wafStaleDataException;
    public PutLoggingConfigurationResponse withWafStaleDataException(Object wafStaleDataException) {
        this.wafStaleDataException = wafStaleDataException;
        return this;
    }
}