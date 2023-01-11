package openapisdk.models.operations;



public class ListLoggingConfigurationsResponse {
    public String contentType;
    public ListLoggingConfigurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListLoggingConfigurationsResponse listLoggingConfigurationsResponse;
    public ListLoggingConfigurationsResponse withListLoggingConfigurationsResponse(openapisdk.models.shared.ListLoggingConfigurationsResponse listLoggingConfigurationsResponse) {
        this.listLoggingConfigurationsResponse = listLoggingConfigurationsResponse;
        return this;
    }
    public Long statusCode;
    public ListLoggingConfigurationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public ListLoggingConfigurationsResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidParameterException;
    public ListLoggingConfigurationsResponse withWafInvalidParameterException(Object wafInvalidParameterException) {
        this.wafInvalidParameterException = wafInvalidParameterException;
        return this;
    }
    public Object wafNonexistentItemException;
    public ListLoggingConfigurationsResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
}