package openapisdk.models.operations;



public class CreateEndpointGroupResponse {
    public Object acceleratorNotFoundException;
    public CreateEndpointGroupResponse withAcceleratorNotFoundException(Object acceleratorNotFoundException) {
        this.acceleratorNotFoundException = acceleratorNotFoundException;
        return this;
    }
    public Object accessDeniedException;
    public CreateEndpointGroupResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateEndpointGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateEndpointGroupResponse createEndpointGroupResponse;
    public CreateEndpointGroupResponse withCreateEndpointGroupResponse(openapisdk.models.shared.CreateEndpointGroupResponse createEndpointGroupResponse) {
        this.createEndpointGroupResponse = createEndpointGroupResponse;
        return this;
    }
    public Object endpointGroupAlreadyExistsException;
    public CreateEndpointGroupResponse withEndpointGroupAlreadyExistsException(Object endpointGroupAlreadyExistsException) {
        this.endpointGroupAlreadyExistsException = endpointGroupAlreadyExistsException;
        return this;
    }
    public Object internalServiceErrorException;
    public CreateEndpointGroupResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public CreateEndpointGroupResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object limitExceededException;
    public CreateEndpointGroupResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object listenerNotFoundException;
    public CreateEndpointGroupResponse withListenerNotFoundException(Object listenerNotFoundException) {
        this.listenerNotFoundException = listenerNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateEndpointGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}