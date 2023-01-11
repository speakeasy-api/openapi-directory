package openapisdk.models.operations;



public class RemoveCustomRoutingEndpointsResponse {
    public Object accessDeniedException;
    public RemoveCustomRoutingEndpointsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public RemoveCustomRoutingEndpointsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public RemoveCustomRoutingEndpointsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object endpointGroupNotFoundException;
    public RemoveCustomRoutingEndpointsResponse withEndpointGroupNotFoundException(Object endpointGroupNotFoundException) {
        this.endpointGroupNotFoundException = endpointGroupNotFoundException;
        return this;
    }
    public Object endpointNotFoundException;
    public RemoveCustomRoutingEndpointsResponse withEndpointNotFoundException(Object endpointNotFoundException) {
        this.endpointNotFoundException = endpointNotFoundException;
        return this;
    }
    public Object internalServiceErrorException;
    public RemoveCustomRoutingEndpointsResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public RemoveCustomRoutingEndpointsResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Long statusCode;
    public RemoveCustomRoutingEndpointsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}