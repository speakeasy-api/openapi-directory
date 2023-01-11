package openapisdk.models.operations;



public class CreateSizeConstraintSetResponse {
    public String contentType;
    public CreateSizeConstraintSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSizeConstraintSetResponse createSizeConstraintSetResponse;
    public CreateSizeConstraintSetResponse withCreateSizeConstraintSetResponse(openapisdk.models.shared.CreateSizeConstraintSetResponse createSizeConstraintSetResponse) {
        this.createSizeConstraintSetResponse = createSizeConstraintSetResponse;
        return this;
    }
    public Long statusCode;
    public CreateSizeConstraintSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafDisallowedNameException;
    public CreateSizeConstraintSetResponse withWafDisallowedNameException(Object wafDisallowedNameException) {
        this.wafDisallowedNameException = wafDisallowedNameException;
        return this;
    }
    public Object wafInternalErrorException;
    public CreateSizeConstraintSetResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public CreateSizeConstraintSetResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafInvalidParameterException;
    public CreateSizeConstraintSetResponse withWafInvalidParameterException(Object wafInvalidParameterException) {
        this.wafInvalidParameterException = wafInvalidParameterException;
        return this;
    }
    public Object wafLimitsExceededException;
    public CreateSizeConstraintSetResponse withWafLimitsExceededException(Object wafLimitsExceededException) {
        this.wafLimitsExceededException = wafLimitsExceededException;
        return this;
    }
    public Object wafStaleDataException;
    public CreateSizeConstraintSetResponse withWafStaleDataException(Object wafStaleDataException) {
        this.wafStaleDataException = wafStaleDataException;
        return this;
    }
}