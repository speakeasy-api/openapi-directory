package openapisdk.models.operations;



public class UpdateRouteCalculatorResponse {
    public Object accessDeniedException;
    public UpdateRouteCalculatorResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateRouteCalculatorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateRouteCalculatorResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateRouteCalculatorResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateRouteCalculatorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateRouteCalculatorResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateRouteCalculatorResponse updateRouteCalculatorResponse;
    public UpdateRouteCalculatorResponse withUpdateRouteCalculatorResponse(openapisdk.models.shared.UpdateRouteCalculatorResponse updateRouteCalculatorResponse) {
        this.updateRouteCalculatorResponse = updateRouteCalculatorResponse;
        return this;
    }
    public Object validationException;
    public UpdateRouteCalculatorResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}