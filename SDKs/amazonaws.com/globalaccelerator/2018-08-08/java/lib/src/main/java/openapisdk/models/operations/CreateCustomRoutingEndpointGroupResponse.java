package openapisdk.models.operations;



public class CreateCustomRoutingEndpointGroupResponse {
    public Object acceleratorNotFoundException;
    public CreateCustomRoutingEndpointGroupResponse withAcceleratorNotFoundException(Object acceleratorNotFoundException) {
        this.acceleratorNotFoundException = acceleratorNotFoundException;
        return this;
    }
    public Object accessDeniedException;
    public CreateCustomRoutingEndpointGroupResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateCustomRoutingEndpointGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateCustomRoutingEndpointGroupResponse createCustomRoutingEndpointGroupResponse;
    public CreateCustomRoutingEndpointGroupResponse withCreateCustomRoutingEndpointGroupResponse(openapisdk.models.shared.CreateCustomRoutingEndpointGroupResponse createCustomRoutingEndpointGroupResponse) {
        this.createCustomRoutingEndpointGroupResponse = createCustomRoutingEndpointGroupResponse;
        return this;
    }
    public Object endpointGroupAlreadyExistsException;
    public CreateCustomRoutingEndpointGroupResponse withEndpointGroupAlreadyExistsException(Object endpointGroupAlreadyExistsException) {
        this.endpointGroupAlreadyExistsException = endpointGroupAlreadyExistsException;
        return this;
    }
    public Object internalServiceErrorException;
    public CreateCustomRoutingEndpointGroupResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public CreateCustomRoutingEndpointGroupResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidPortRangeException;
    public CreateCustomRoutingEndpointGroupResponse withInvalidPortRangeException(Object invalidPortRangeException) {
        this.invalidPortRangeException = invalidPortRangeException;
        return this;
    }
    public Object limitExceededException;
    public CreateCustomRoutingEndpointGroupResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object listenerNotFoundException;
    public CreateCustomRoutingEndpointGroupResponse withListenerNotFoundException(Object listenerNotFoundException) {
        this.listenerNotFoundException = listenerNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateCustomRoutingEndpointGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}