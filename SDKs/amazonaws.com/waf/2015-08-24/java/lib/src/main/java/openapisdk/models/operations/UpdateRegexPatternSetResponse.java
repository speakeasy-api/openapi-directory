package openapisdk.models.operations;



public class UpdateRegexPatternSetResponse {
    public String contentType;
    public UpdateRegexPatternSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateRegexPatternSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateRegexPatternSetResponse updateRegexPatternSetResponse;
    public UpdateRegexPatternSetResponse withUpdateRegexPatternSetResponse(openapisdk.models.shared.UpdateRegexPatternSetResponse updateRegexPatternSetResponse) {
        this.updateRegexPatternSetResponse = updateRegexPatternSetResponse;
        return this;
    }
    public Object wafInternalErrorException;
    public UpdateRegexPatternSetResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public UpdateRegexPatternSetResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafInvalidOperationException;
    public UpdateRegexPatternSetResponse withWafInvalidOperationException(Object wafInvalidOperationException) {
        this.wafInvalidOperationException = wafInvalidOperationException;
        return this;
    }
    public Object wafInvalidRegexPatternException;
    public UpdateRegexPatternSetResponse withWafInvalidRegexPatternException(Object wafInvalidRegexPatternException) {
        this.wafInvalidRegexPatternException = wafInvalidRegexPatternException;
        return this;
    }
    public Object wafLimitsExceededException;
    public UpdateRegexPatternSetResponse withWafLimitsExceededException(Object wafLimitsExceededException) {
        this.wafLimitsExceededException = wafLimitsExceededException;
        return this;
    }
    public Object wafNonexistentContainerException;
    public UpdateRegexPatternSetResponse withWafNonexistentContainerException(Object wafNonexistentContainerException) {
        this.wafNonexistentContainerException = wafNonexistentContainerException;
        return this;
    }
    public Object wafNonexistentItemException;
    public UpdateRegexPatternSetResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
    public Object wafStaleDataException;
    public UpdateRegexPatternSetResponse withWafStaleDataException(Object wafStaleDataException) {
        this.wafStaleDataException = wafStaleDataException;
        return this;
    }
}