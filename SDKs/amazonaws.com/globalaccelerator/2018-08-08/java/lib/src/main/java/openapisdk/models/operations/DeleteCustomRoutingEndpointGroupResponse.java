package openapisdk.models.operations;



public class DeleteCustomRoutingEndpointGroupResponse {
    public String contentType;
    public DeleteCustomRoutingEndpointGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object endpointGroupNotFoundException;
    public DeleteCustomRoutingEndpointGroupResponse withEndpointGroupNotFoundException(Object endpointGroupNotFoundException) {
        this.endpointGroupNotFoundException = endpointGroupNotFoundException;
        return this;
    }
    public Object internalServiceErrorException;
    public DeleteCustomRoutingEndpointGroupResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public DeleteCustomRoutingEndpointGroupResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Long statusCode;
    public DeleteCustomRoutingEndpointGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}