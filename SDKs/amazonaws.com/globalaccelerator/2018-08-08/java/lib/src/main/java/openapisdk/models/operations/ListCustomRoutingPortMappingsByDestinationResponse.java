package openapisdk.models.operations;



public class ListCustomRoutingPortMappingsByDestinationResponse {
    public String contentType;
    public ListCustomRoutingPortMappingsByDestinationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object endpointNotFoundException;
    public ListCustomRoutingPortMappingsByDestinationResponse withEndpointNotFoundException(Object endpointNotFoundException) {
        this.endpointNotFoundException = endpointNotFoundException;
        return this;
    }
    public Object internalServiceErrorException;
    public ListCustomRoutingPortMappingsByDestinationResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public ListCustomRoutingPortMappingsByDestinationResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListCustomRoutingPortMappingsByDestinationResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListCustomRoutingPortMappingsByDestinationResponse listCustomRoutingPortMappingsByDestinationResponse;
    public ListCustomRoutingPortMappingsByDestinationResponse withListCustomRoutingPortMappingsByDestinationResponse(openapisdk.models.shared.ListCustomRoutingPortMappingsByDestinationResponse listCustomRoutingPortMappingsByDestinationResponse) {
        this.listCustomRoutingPortMappingsByDestinationResponse = listCustomRoutingPortMappingsByDestinationResponse;
        return this;
    }
    public Long statusCode;
    public ListCustomRoutingPortMappingsByDestinationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}