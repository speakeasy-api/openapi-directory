package openapisdk.models.operations;



public class CreateByteMatchSetResponse {
    public String contentType;
    public CreateByteMatchSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateByteMatchSetResponse createByteMatchSetResponse;
    public CreateByteMatchSetResponse withCreateByteMatchSetResponse(openapisdk.models.shared.CreateByteMatchSetResponse createByteMatchSetResponse) {
        this.createByteMatchSetResponse = createByteMatchSetResponse;
        return this;
    }
    public Long statusCode;
    public CreateByteMatchSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafDisallowedNameException;
    public CreateByteMatchSetResponse withWafDisallowedNameException(Object wafDisallowedNameException) {
        this.wafDisallowedNameException = wafDisallowedNameException;
        return this;
    }
    public Object wafInternalErrorException;
    public CreateByteMatchSetResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public CreateByteMatchSetResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafInvalidParameterException;
    public CreateByteMatchSetResponse withWafInvalidParameterException(Object wafInvalidParameterException) {
        this.wafInvalidParameterException = wafInvalidParameterException;
        return this;
    }
    public Object wafLimitsExceededException;
    public CreateByteMatchSetResponse withWafLimitsExceededException(Object wafLimitsExceededException) {
        this.wafLimitsExceededException = wafLimitsExceededException;
        return this;
    }
    public Object wafStaleDataException;
    public CreateByteMatchSetResponse withWafStaleDataException(Object wafStaleDataException) {
        this.wafStaleDataException = wafStaleDataException;
        return this;
    }
}