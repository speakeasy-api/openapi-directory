package openapisdk.models.operations;



public class CalculateRouteResponse {
    public Object accessDeniedException;
    public CalculateRouteResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.CalculateRouteResponse calculateRouteResponse;
    public CalculateRouteResponse withCalculateRouteResponse(openapisdk.models.shared.CalculateRouteResponse calculateRouteResponse) {
        this.calculateRouteResponse = calculateRouteResponse;
        return this;
    }
    public String contentType;
    public CalculateRouteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public CalculateRouteResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CalculateRouteResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CalculateRouteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CalculateRouteResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CalculateRouteResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}