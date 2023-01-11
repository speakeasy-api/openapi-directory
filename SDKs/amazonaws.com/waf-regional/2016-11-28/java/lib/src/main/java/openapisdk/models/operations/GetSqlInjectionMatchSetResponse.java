package openapisdk.models.operations;



public class GetSqlInjectionMatchSetResponse {
    public String contentType;
    public GetSqlInjectionMatchSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSqlInjectionMatchSetResponse getSqlInjectionMatchSetResponse;
    public GetSqlInjectionMatchSetResponse withGetSqlInjectionMatchSetResponse(openapisdk.models.shared.GetSqlInjectionMatchSetResponse getSqlInjectionMatchSetResponse) {
        this.getSqlInjectionMatchSetResponse = getSqlInjectionMatchSetResponse;
        return this;
    }
    public Long statusCode;
    public GetSqlInjectionMatchSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public GetSqlInjectionMatchSetResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public GetSqlInjectionMatchSetResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafNonexistentItemException;
    public GetSqlInjectionMatchSetResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
}