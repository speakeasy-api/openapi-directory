package openapisdk.models.operations;



public class DeleteLoggingConfigurationResponse {
    public String contentType;
    public DeleteLoggingConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteLoggingConfigurationResponse;
    public DeleteLoggingConfigurationResponse withDeleteLoggingConfigurationResponse(java.util.Map<String, Object> deleteLoggingConfigurationResponse) {
        this.deleteLoggingConfigurationResponse = deleteLoggingConfigurationResponse;
        return this;
    }
    public Long statusCode;
    public DeleteLoggingConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public DeleteLoggingConfigurationResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafNonexistentItemException;
    public DeleteLoggingConfigurationResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
    public Object wafStaleDataException;
    public DeleteLoggingConfigurationResponse withWafStaleDataException(Object wafStaleDataException) {
        this.wafStaleDataException = wafStaleDataException;
        return this;
    }
}