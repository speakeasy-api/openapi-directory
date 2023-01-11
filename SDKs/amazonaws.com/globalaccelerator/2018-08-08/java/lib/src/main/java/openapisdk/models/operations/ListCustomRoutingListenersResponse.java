package openapisdk.models.operations;



public class ListCustomRoutingListenersResponse {
    public Object acceleratorNotFoundException;
    public ListCustomRoutingListenersResponse withAcceleratorNotFoundException(Object acceleratorNotFoundException) {
        this.acceleratorNotFoundException = acceleratorNotFoundException;
        return this;
    }
    public String contentType;
    public ListCustomRoutingListenersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public ListCustomRoutingListenersResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public ListCustomRoutingListenersResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListCustomRoutingListenersResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListCustomRoutingListenersResponse listCustomRoutingListenersResponse;
    public ListCustomRoutingListenersResponse withListCustomRoutingListenersResponse(openapisdk.models.shared.ListCustomRoutingListenersResponse listCustomRoutingListenersResponse) {
        this.listCustomRoutingListenersResponse = listCustomRoutingListenersResponse;
        return this;
    }
    public Long statusCode;
    public ListCustomRoutingListenersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}