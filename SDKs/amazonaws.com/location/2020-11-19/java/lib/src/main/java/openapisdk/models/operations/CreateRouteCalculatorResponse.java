package openapisdk.models.operations;



public class CreateRouteCalculatorResponse {
    public Object accessDeniedException;
    public CreateRouteCalculatorResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateRouteCalculatorResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateRouteCalculatorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateRouteCalculatorResponse createRouteCalculatorResponse;
    public CreateRouteCalculatorResponse withCreateRouteCalculatorResponse(openapisdk.models.shared.CreateRouteCalculatorResponse createRouteCalculatorResponse) {
        this.createRouteCalculatorResponse = createRouteCalculatorResponse;
        return this;
    }
    public Object internalServerException;
    public CreateRouteCalculatorResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public CreateRouteCalculatorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateRouteCalculatorResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateRouteCalculatorResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}