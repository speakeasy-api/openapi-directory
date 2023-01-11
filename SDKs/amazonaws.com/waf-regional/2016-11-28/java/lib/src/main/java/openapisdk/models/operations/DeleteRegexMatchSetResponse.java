package openapisdk.models.operations;



public class DeleteRegexMatchSetResponse {
    public String contentType;
    public DeleteRegexMatchSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteRegexMatchSetResponse deleteRegexMatchSetResponse;
    public DeleteRegexMatchSetResponse withDeleteRegexMatchSetResponse(openapisdk.models.shared.DeleteRegexMatchSetResponse deleteRegexMatchSetResponse) {
        this.deleteRegexMatchSetResponse = deleteRegexMatchSetResponse;
        return this;
    }
    public Long statusCode;
    public DeleteRegexMatchSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public DeleteRegexMatchSetResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public DeleteRegexMatchSetResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafNonEmptyEntityException;
    public DeleteRegexMatchSetResponse withWafNonEmptyEntityException(Object wafNonEmptyEntityException) {
        this.wafNonEmptyEntityException = wafNonEmptyEntityException;
        return this;
    }
    public Object wafNonexistentItemException;
    public DeleteRegexMatchSetResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
    public Object wafReferencedItemException;
    public DeleteRegexMatchSetResponse withWafReferencedItemException(Object wafReferencedItemException) {
        this.wafReferencedItemException = wafReferencedItemException;
        return this;
    }
    public Object wafStaleDataException;
    public DeleteRegexMatchSetResponse withWafStaleDataException(Object wafStaleDataException) {
        this.wafStaleDataException = wafStaleDataException;
        return this;
    }
}