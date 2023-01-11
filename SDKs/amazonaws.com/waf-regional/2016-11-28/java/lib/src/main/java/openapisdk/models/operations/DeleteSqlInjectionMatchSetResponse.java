package openapisdk.models.operations;



public class DeleteSqlInjectionMatchSetResponse {
    public String contentType;
    public DeleteSqlInjectionMatchSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteSqlInjectionMatchSetResponse deleteSqlInjectionMatchSetResponse;
    public DeleteSqlInjectionMatchSetResponse withDeleteSqlInjectionMatchSetResponse(openapisdk.models.shared.DeleteSqlInjectionMatchSetResponse deleteSqlInjectionMatchSetResponse) {
        this.deleteSqlInjectionMatchSetResponse = deleteSqlInjectionMatchSetResponse;
        return this;
    }
    public Long statusCode;
    public DeleteSqlInjectionMatchSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public DeleteSqlInjectionMatchSetResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public DeleteSqlInjectionMatchSetResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafNonEmptyEntityException;
    public DeleteSqlInjectionMatchSetResponse withWafNonEmptyEntityException(Object wafNonEmptyEntityException) {
        this.wafNonEmptyEntityException = wafNonEmptyEntityException;
        return this;
    }
    public Object wafNonexistentItemException;
    public DeleteSqlInjectionMatchSetResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
    public Object wafReferencedItemException;
    public DeleteSqlInjectionMatchSetResponse withWafReferencedItemException(Object wafReferencedItemException) {
        this.wafReferencedItemException = wafReferencedItemException;
        return this;
    }
    public Object wafStaleDataException;
    public DeleteSqlInjectionMatchSetResponse withWafStaleDataException(Object wafStaleDataException) {
        this.wafStaleDataException = wafStaleDataException;
        return this;
    }
}