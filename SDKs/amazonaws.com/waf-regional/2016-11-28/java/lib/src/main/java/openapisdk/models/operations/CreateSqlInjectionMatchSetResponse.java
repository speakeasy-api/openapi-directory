package openapisdk.models.operations;



public class CreateSqlInjectionMatchSetResponse {
    public String contentType;
    public CreateSqlInjectionMatchSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSqlInjectionMatchSetResponse createSqlInjectionMatchSetResponse;
    public CreateSqlInjectionMatchSetResponse withCreateSqlInjectionMatchSetResponse(openapisdk.models.shared.CreateSqlInjectionMatchSetResponse createSqlInjectionMatchSetResponse) {
        this.createSqlInjectionMatchSetResponse = createSqlInjectionMatchSetResponse;
        return this;
    }
    public Long statusCode;
    public CreateSqlInjectionMatchSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafDisallowedNameException;
    public CreateSqlInjectionMatchSetResponse withWafDisallowedNameException(Object wafDisallowedNameException) {
        this.wafDisallowedNameException = wafDisallowedNameException;
        return this;
    }
    public Object wafInternalErrorException;
    public CreateSqlInjectionMatchSetResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public CreateSqlInjectionMatchSetResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafInvalidParameterException;
    public CreateSqlInjectionMatchSetResponse withWafInvalidParameterException(Object wafInvalidParameterException) {
        this.wafInvalidParameterException = wafInvalidParameterException;
        return this;
    }
    public Object wafLimitsExceededException;
    public CreateSqlInjectionMatchSetResponse withWafLimitsExceededException(Object wafLimitsExceededException) {
        this.wafLimitsExceededException = wafLimitsExceededException;
        return this;
    }
    public Object wafStaleDataException;
    public CreateSqlInjectionMatchSetResponse withWafStaleDataException(Object wafStaleDataException) {
        this.wafStaleDataException = wafStaleDataException;
        return this;
    }
}