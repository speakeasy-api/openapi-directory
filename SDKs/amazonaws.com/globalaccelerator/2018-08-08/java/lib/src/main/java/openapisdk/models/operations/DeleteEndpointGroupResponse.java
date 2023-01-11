package openapisdk.models.operations;



public class DeleteEndpointGroupResponse {
    public String contentType;
    public DeleteEndpointGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object endpointGroupNotFoundException;
    public DeleteEndpointGroupResponse withEndpointGroupNotFoundException(Object endpointGroupNotFoundException) {
        this.endpointGroupNotFoundException = endpointGroupNotFoundException;
        return this;
    }
    public Object internalServiceErrorException;
    public DeleteEndpointGroupResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public DeleteEndpointGroupResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Long statusCode;
    public DeleteEndpointGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}