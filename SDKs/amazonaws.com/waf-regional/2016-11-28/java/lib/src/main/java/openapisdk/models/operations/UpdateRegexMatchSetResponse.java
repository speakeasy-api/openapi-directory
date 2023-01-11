package openapisdk.models.operations;



public class UpdateRegexMatchSetResponse {
    public String contentType;
    public UpdateRegexMatchSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateRegexMatchSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateRegexMatchSetResponse updateRegexMatchSetResponse;
    public UpdateRegexMatchSetResponse withUpdateRegexMatchSetResponse(openapisdk.models.shared.UpdateRegexMatchSetResponse updateRegexMatchSetResponse) {
        this.updateRegexMatchSetResponse = updateRegexMatchSetResponse;
        return this;
    }
    public Object wafDisallowedNameException;
    public UpdateRegexMatchSetResponse withWafDisallowedNameException(Object wafDisallowedNameException) {
        this.wafDisallowedNameException = wafDisallowedNameException;
        return this;
    }
    public Object wafInternalErrorException;
    public UpdateRegexMatchSetResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public UpdateRegexMatchSetResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafInvalidOperationException;
    public UpdateRegexMatchSetResponse withWafInvalidOperationException(Object wafInvalidOperationException) {
        this.wafInvalidOperationException = wafInvalidOperationException;
        return this;
    }
    public Object wafLimitsExceededException;
    public UpdateRegexMatchSetResponse withWafLimitsExceededException(Object wafLimitsExceededException) {
        this.wafLimitsExceededException = wafLimitsExceededException;
        return this;
    }
    public Object wafNonexistentContainerException;
    public UpdateRegexMatchSetResponse withWafNonexistentContainerException(Object wafNonexistentContainerException) {
        this.wafNonexistentContainerException = wafNonexistentContainerException;
        return this;
    }
    public Object wafNonexistentItemException;
    public UpdateRegexMatchSetResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
    public Object wafStaleDataException;
    public UpdateRegexMatchSetResponse withWafStaleDataException(Object wafStaleDataException) {
        this.wafStaleDataException = wafStaleDataException;
        return this;
    }
}