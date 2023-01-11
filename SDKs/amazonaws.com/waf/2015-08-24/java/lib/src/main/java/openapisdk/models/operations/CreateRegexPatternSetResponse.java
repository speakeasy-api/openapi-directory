package openapisdk.models.operations;



public class CreateRegexPatternSetResponse {
    public String contentType;
    public CreateRegexPatternSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateRegexPatternSetResponse createRegexPatternSetResponse;
    public CreateRegexPatternSetResponse withCreateRegexPatternSetResponse(openapisdk.models.shared.CreateRegexPatternSetResponse createRegexPatternSetResponse) {
        this.createRegexPatternSetResponse = createRegexPatternSetResponse;
        return this;
    }
    public Long statusCode;
    public CreateRegexPatternSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafDisallowedNameException;
    public CreateRegexPatternSetResponse withWafDisallowedNameException(Object wafDisallowedNameException) {
        this.wafDisallowedNameException = wafDisallowedNameException;
        return this;
    }
    public Object wafInternalErrorException;
    public CreateRegexPatternSetResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafLimitsExceededException;
    public CreateRegexPatternSetResponse withWafLimitsExceededException(Object wafLimitsExceededException) {
        this.wafLimitsExceededException = wafLimitsExceededException;
        return this;
    }
    public Object wafStaleDataException;
    public CreateRegexPatternSetResponse withWafStaleDataException(Object wafStaleDataException) {
        this.wafStaleDataException = wafStaleDataException;
        return this;
    }
}