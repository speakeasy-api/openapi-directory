package openapisdk.models.operations;



public class UpdateEndpointGroupResponse {
    public Object accessDeniedException;
    public UpdateEndpointGroupResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateEndpointGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object endpointGroupNotFoundException;
    public UpdateEndpointGroupResponse withEndpointGroupNotFoundException(Object endpointGroupNotFoundException) {
        this.endpointGroupNotFoundException = endpointGroupNotFoundException;
        return this;
    }
    public Object internalServiceErrorException;
    public UpdateEndpointGroupResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public UpdateEndpointGroupResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object limitExceededException;
    public UpdateEndpointGroupResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public UpdateEndpointGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateEndpointGroupResponse updateEndpointGroupResponse;
    public UpdateEndpointGroupResponse withUpdateEndpointGroupResponse(openapisdk.models.shared.UpdateEndpointGroupResponse updateEndpointGroupResponse) {
        this.updateEndpointGroupResponse = updateEndpointGroupResponse;
        return this;
    }
}