package openapisdk.models.operations;



public class DeleteSizeConstraintSetResponse {
    public String contentType;
    public DeleteSizeConstraintSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteSizeConstraintSetResponse deleteSizeConstraintSetResponse;
    public DeleteSizeConstraintSetResponse withDeleteSizeConstraintSetResponse(openapisdk.models.shared.DeleteSizeConstraintSetResponse deleteSizeConstraintSetResponse) {
        this.deleteSizeConstraintSetResponse = deleteSizeConstraintSetResponse;
        return this;
    }
    public Long statusCode;
    public DeleteSizeConstraintSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public DeleteSizeConstraintSetResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public DeleteSizeConstraintSetResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafNonEmptyEntityException;
    public DeleteSizeConstraintSetResponse withWafNonEmptyEntityException(Object wafNonEmptyEntityException) {
        this.wafNonEmptyEntityException = wafNonEmptyEntityException;
        return this;
    }
    public Object wafNonexistentItemException;
    public DeleteSizeConstraintSetResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
    public Object wafReferencedItemException;
    public DeleteSizeConstraintSetResponse withWafReferencedItemException(Object wafReferencedItemException) {
        this.wafReferencedItemException = wafReferencedItemException;
        return this;
    }
    public Object wafStaleDataException;
    public DeleteSizeConstraintSetResponse withWafStaleDataException(Object wafStaleDataException) {
        this.wafStaleDataException = wafStaleDataException;
        return this;
    }
}