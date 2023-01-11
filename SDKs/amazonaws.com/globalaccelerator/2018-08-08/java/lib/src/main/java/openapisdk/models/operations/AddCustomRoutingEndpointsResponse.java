package openapisdk.models.operations;



public class AddCustomRoutingEndpointsResponse {
    public Object accessDeniedException;
    public AddCustomRoutingEndpointsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.AddCustomRoutingEndpointsResponse addCustomRoutingEndpointsResponse;
    public AddCustomRoutingEndpointsResponse withAddCustomRoutingEndpointsResponse(openapisdk.models.shared.AddCustomRoutingEndpointsResponse addCustomRoutingEndpointsResponse) {
        this.addCustomRoutingEndpointsResponse = addCustomRoutingEndpointsResponse;
        return this;
    }
    public Object conflictException;
    public AddCustomRoutingEndpointsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public AddCustomRoutingEndpointsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object endpointAlreadyExistsException;
    public AddCustomRoutingEndpointsResponse withEndpointAlreadyExistsException(Object endpointAlreadyExistsException) {
        this.endpointAlreadyExistsException = endpointAlreadyExistsException;
        return this;
    }
    public Object endpointGroupNotFoundException;
    public AddCustomRoutingEndpointsResponse withEndpointGroupNotFoundException(Object endpointGroupNotFoundException) {
        this.endpointGroupNotFoundException = endpointGroupNotFoundException;
        return this;
    }
    public Object internalServiceErrorException;
    public AddCustomRoutingEndpointsResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public AddCustomRoutingEndpointsResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object limitExceededException;
    public AddCustomRoutingEndpointsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public AddCustomRoutingEndpointsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}