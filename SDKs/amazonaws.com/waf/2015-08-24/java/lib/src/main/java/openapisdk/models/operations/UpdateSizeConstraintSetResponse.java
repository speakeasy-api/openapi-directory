package openapisdk.models.operations;



public class UpdateSizeConstraintSetResponse {
    public String contentType;
    public UpdateSizeConstraintSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSizeConstraintSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateSizeConstraintSetResponse updateSizeConstraintSetResponse;
    public UpdateSizeConstraintSetResponse withUpdateSizeConstraintSetResponse(openapisdk.models.shared.UpdateSizeConstraintSetResponse updateSizeConstraintSetResponse) {
        this.updateSizeConstraintSetResponse = updateSizeConstraintSetResponse;
        return this;
    }
    public Object wafInternalErrorException;
    public UpdateSizeConstraintSetResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public UpdateSizeConstraintSetResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafInvalidOperationException;
    public UpdateSizeConstraintSetResponse withWafInvalidOperationException(Object wafInvalidOperationException) {
        this.wafInvalidOperationException = wafInvalidOperationException;
        return this;
    }
    public Object wafInvalidParameterException;
    public UpdateSizeConstraintSetResponse withWafInvalidParameterException(Object wafInvalidParameterException) {
        this.wafInvalidParameterException = wafInvalidParameterException;
        return this;
    }
    public Object wafLimitsExceededException;
    public UpdateSizeConstraintSetResponse withWafLimitsExceededException(Object wafLimitsExceededException) {
        this.wafLimitsExceededException = wafLimitsExceededException;
        return this;
    }
    public Object wafNonexistentContainerException;
    public UpdateSizeConstraintSetResponse withWafNonexistentContainerException(Object wafNonexistentContainerException) {
        this.wafNonexistentContainerException = wafNonexistentContainerException;
        return this;
    }
    public Object wafNonexistentItemException;
    public UpdateSizeConstraintSetResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
    public Object wafReferencedItemException;
    public UpdateSizeConstraintSetResponse withWafReferencedItemException(Object wafReferencedItemException) {
        this.wafReferencedItemException = wafReferencedItemException;
        return this;
    }
    public Object wafStaleDataException;
    public UpdateSizeConstraintSetResponse withWafStaleDataException(Object wafStaleDataException) {
        this.wafStaleDataException = wafStaleDataException;
        return this;
    }
}