package openapisdk.models.operations;



public class CreateRegexMatchSetResponse {
    public String contentType;
    public CreateRegexMatchSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateRegexMatchSetResponse createRegexMatchSetResponse;
    public CreateRegexMatchSetResponse withCreateRegexMatchSetResponse(openapisdk.models.shared.CreateRegexMatchSetResponse createRegexMatchSetResponse) {
        this.createRegexMatchSetResponse = createRegexMatchSetResponse;
        return this;
    }
    public Long statusCode;
    public CreateRegexMatchSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafDisallowedNameException;
    public CreateRegexMatchSetResponse withWafDisallowedNameException(Object wafDisallowedNameException) {
        this.wafDisallowedNameException = wafDisallowedNameException;
        return this;
    }
    public Object wafInternalErrorException;
    public CreateRegexMatchSetResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafLimitsExceededException;
    public CreateRegexMatchSetResponse withWafLimitsExceededException(Object wafLimitsExceededException) {
        this.wafLimitsExceededException = wafLimitsExceededException;
        return this;
    }
    public Object wafStaleDataException;
    public CreateRegexMatchSetResponse withWafStaleDataException(Object wafStaleDataException) {
        this.wafStaleDataException = wafStaleDataException;
        return this;
    }
}