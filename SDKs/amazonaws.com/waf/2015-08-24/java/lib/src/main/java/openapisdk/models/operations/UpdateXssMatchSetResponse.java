package openapisdk.models.operations;



public class UpdateXssMatchSetResponse {
    public String contentType;
    public UpdateXssMatchSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateXssMatchSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateXssMatchSetResponse updateXssMatchSetResponse;
    public UpdateXssMatchSetResponse withUpdateXssMatchSetResponse(openapisdk.models.shared.UpdateXssMatchSetResponse updateXssMatchSetResponse) {
        this.updateXssMatchSetResponse = updateXssMatchSetResponse;
        return this;
    }
    public Object wafInternalErrorException;
    public UpdateXssMatchSetResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public UpdateXssMatchSetResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafInvalidOperationException;
    public UpdateXssMatchSetResponse withWafInvalidOperationException(Object wafInvalidOperationException) {
        this.wafInvalidOperationException = wafInvalidOperationException;
        return this;
    }
    public Object wafInvalidParameterException;
    public UpdateXssMatchSetResponse withWafInvalidParameterException(Object wafInvalidParameterException) {
        this.wafInvalidParameterException = wafInvalidParameterException;
        return this;
    }
    public Object wafLimitsExceededException;
    public UpdateXssMatchSetResponse withWafLimitsExceededException(Object wafLimitsExceededException) {
        this.wafLimitsExceededException = wafLimitsExceededException;
        return this;
    }
    public Object wafNonexistentContainerException;
    public UpdateXssMatchSetResponse withWafNonexistentContainerException(Object wafNonexistentContainerException) {
        this.wafNonexistentContainerException = wafNonexistentContainerException;
        return this;
    }
    public Object wafNonexistentItemException;
    public UpdateXssMatchSetResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
    public Object wafStaleDataException;
    public UpdateXssMatchSetResponse withWafStaleDataException(Object wafStaleDataException) {
        this.wafStaleDataException = wafStaleDataException;
        return this;
    }
}