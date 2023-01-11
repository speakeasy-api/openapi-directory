package openapisdk.models.operations;



public class ListCustomRoutingPortMappingsResponse {
    public Object acceleratorNotFoundException;
    public ListCustomRoutingPortMappingsResponse withAcceleratorNotFoundException(Object acceleratorNotFoundException) {
        this.acceleratorNotFoundException = acceleratorNotFoundException;
        return this;
    }
    public String contentType;
    public ListCustomRoutingPortMappingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object endpointGroupNotFoundException;
    public ListCustomRoutingPortMappingsResponse withEndpointGroupNotFoundException(Object endpointGroupNotFoundException) {
        this.endpointGroupNotFoundException = endpointGroupNotFoundException;
        return this;
    }
    public Object internalServiceErrorException;
    public ListCustomRoutingPortMappingsResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public ListCustomRoutingPortMappingsResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListCustomRoutingPortMappingsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListCustomRoutingPortMappingsResponse listCustomRoutingPortMappingsResponse;
    public ListCustomRoutingPortMappingsResponse withListCustomRoutingPortMappingsResponse(openapisdk.models.shared.ListCustomRoutingPortMappingsResponse listCustomRoutingPortMappingsResponse) {
        this.listCustomRoutingPortMappingsResponse = listCustomRoutingPortMappingsResponse;
        return this;
    }
    public Long statusCode;
    public ListCustomRoutingPortMappingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}