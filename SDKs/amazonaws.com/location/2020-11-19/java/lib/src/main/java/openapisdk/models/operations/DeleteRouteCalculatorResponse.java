package openapisdk.models.operations;



public class DeleteRouteCalculatorResponse {
    public Object accessDeniedException;
    public DeleteRouteCalculatorResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteRouteCalculatorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteRouteCalculatorResponse;
    public DeleteRouteCalculatorResponse withDeleteRouteCalculatorResponse(java.util.Map<String, Object> deleteRouteCalculatorResponse) {
        this.deleteRouteCalculatorResponse = deleteRouteCalculatorResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteRouteCalculatorResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteRouteCalculatorResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteRouteCalculatorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteRouteCalculatorResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteRouteCalculatorResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}