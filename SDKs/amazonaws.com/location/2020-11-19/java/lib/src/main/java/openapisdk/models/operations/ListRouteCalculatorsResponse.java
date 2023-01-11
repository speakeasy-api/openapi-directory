package openapisdk.models.operations;



public class ListRouteCalculatorsResponse {
    public Object accessDeniedException;
    public ListRouteCalculatorsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListRouteCalculatorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListRouteCalculatorsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListRouteCalculatorsResponse listRouteCalculatorsResponse;
    public ListRouteCalculatorsResponse withListRouteCalculatorsResponse(openapisdk.models.shared.ListRouteCalculatorsResponse listRouteCalculatorsResponse) {
        this.listRouteCalculatorsResponse = listRouteCalculatorsResponse;
        return this;
    }
    public Long statusCode;
    public ListRouteCalculatorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListRouteCalculatorsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListRouteCalculatorsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}