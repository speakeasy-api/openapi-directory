package openapisdk.models.operations;



public class ListEndpointGroupsResponse {
    public String contentType;
    public ListEndpointGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public ListEndpointGroupsResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public ListEndpointGroupsResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListEndpointGroupsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListEndpointGroupsResponse listEndpointGroupsResponse;
    public ListEndpointGroupsResponse withListEndpointGroupsResponse(openapisdk.models.shared.ListEndpointGroupsResponse listEndpointGroupsResponse) {
        this.listEndpointGroupsResponse = listEndpointGroupsResponse;
        return this;
    }
    public Object listenerNotFoundException;
    public ListEndpointGroupsResponse withListenerNotFoundException(Object listenerNotFoundException) {
        this.listenerNotFoundException = listenerNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListEndpointGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}