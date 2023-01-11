package openapisdk.models.operations;



public class ListNamedShadowsForThingResponse {
    public String contentType;
    public ListNamedShadowsForThingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListNamedShadowsForThingResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListNamedShadowsForThingResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListNamedShadowsForThingResponse listNamedShadowsForThingResponse;
    public ListNamedShadowsForThingResponse withListNamedShadowsForThingResponse(openapisdk.models.shared.ListNamedShadowsForThingResponse listNamedShadowsForThingResponse) {
        this.listNamedShadowsForThingResponse = listNamedShadowsForThingResponse;
        return this;
    }
    public Object methodNotAllowedException;
    public ListNamedShadowsForThingResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListNamedShadowsForThingResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListNamedShadowsForThingResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListNamedShadowsForThingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListNamedShadowsForThingResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public ListNamedShadowsForThingResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}