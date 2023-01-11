package openapisdk.models.operations;



public class ListCustomRoutingEndpointGroupsResponse {
    public String contentType;
    public ListCustomRoutingEndpointGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public ListCustomRoutingEndpointGroupsResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public ListCustomRoutingEndpointGroupsResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListCustomRoutingEndpointGroupsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListCustomRoutingEndpointGroupsResponse listCustomRoutingEndpointGroupsResponse;
    public ListCustomRoutingEndpointGroupsResponse withListCustomRoutingEndpointGroupsResponse(openapisdk.models.shared.ListCustomRoutingEndpointGroupsResponse listCustomRoutingEndpointGroupsResponse) {
        this.listCustomRoutingEndpointGroupsResponse = listCustomRoutingEndpointGroupsResponse;
        return this;
    }
    public Object listenerNotFoundException;
    public ListCustomRoutingEndpointGroupsResponse withListenerNotFoundException(Object listenerNotFoundException) {
        this.listenerNotFoundException = listenerNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListCustomRoutingEndpointGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}