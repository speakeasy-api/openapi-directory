package openapisdk.models.operations;



public class DeleteRegexPatternSetResponse {
    public String contentType;
    public DeleteRegexPatternSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteRegexPatternSetResponse deleteRegexPatternSetResponse;
    public DeleteRegexPatternSetResponse withDeleteRegexPatternSetResponse(openapisdk.models.shared.DeleteRegexPatternSetResponse deleteRegexPatternSetResponse) {
        this.deleteRegexPatternSetResponse = deleteRegexPatternSetResponse;
        return this;
    }
    public Long statusCode;
    public DeleteRegexPatternSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public DeleteRegexPatternSetResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public DeleteRegexPatternSetResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafNonEmptyEntityException;
    public DeleteRegexPatternSetResponse withWafNonEmptyEntityException(Object wafNonEmptyEntityException) {
        this.wafNonEmptyEntityException = wafNonEmptyEntityException;
        return this;
    }
    public Object wafNonexistentItemException;
    public DeleteRegexPatternSetResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
    public Object wafReferencedItemException;
    public DeleteRegexPatternSetResponse withWafReferencedItemException(Object wafReferencedItemException) {
        this.wafReferencedItemException = wafReferencedItemException;
        return this;
    }
    public Object wafStaleDataException;
    public DeleteRegexPatternSetResponse withWafStaleDataException(Object wafStaleDataException) {
        this.wafStaleDataException = wafStaleDataException;
        return this;
    }
}