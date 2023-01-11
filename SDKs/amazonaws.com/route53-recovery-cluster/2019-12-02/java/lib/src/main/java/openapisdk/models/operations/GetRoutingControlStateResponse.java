package openapisdk.models.operations;



public class GetRoutingControlStateResponse {
    public Object accessDeniedException;
    public GetRoutingControlStateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetRoutingControlStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object endpointTemporarilyUnavailableException;
    public GetRoutingControlStateResponse withEndpointTemporarilyUnavailableException(Object endpointTemporarilyUnavailableException) {
        this.endpointTemporarilyUnavailableException = endpointTemporarilyUnavailableException;
        return this;
    }
    public openapisdk.models.shared.GetRoutingControlStateResponse getRoutingControlStateResponse;
    public GetRoutingControlStateResponse withGetRoutingControlStateResponse(openapisdk.models.shared.GetRoutingControlStateResponse getRoutingControlStateResponse) {
        this.getRoutingControlStateResponse = getRoutingControlStateResponse;
        return this;
    }
    public Object internalServerException;
    public GetRoutingControlStateResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetRoutingControlStateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetRoutingControlStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetRoutingControlStateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetRoutingControlStateResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}