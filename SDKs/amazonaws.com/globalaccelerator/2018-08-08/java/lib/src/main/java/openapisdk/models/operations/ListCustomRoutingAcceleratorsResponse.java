package openapisdk.models.operations;



public class ListCustomRoutingAcceleratorsResponse {
    public String contentType;
    public ListCustomRoutingAcceleratorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public ListCustomRoutingAcceleratorsResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public ListCustomRoutingAcceleratorsResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListCustomRoutingAcceleratorsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListCustomRoutingAcceleratorsResponse listCustomRoutingAcceleratorsResponse;
    public ListCustomRoutingAcceleratorsResponse withListCustomRoutingAcceleratorsResponse(openapisdk.models.shared.ListCustomRoutingAcceleratorsResponse listCustomRoutingAcceleratorsResponse) {
        this.listCustomRoutingAcceleratorsResponse = listCustomRoutingAcceleratorsResponse;
        return this;
    }
    public Long statusCode;
    public ListCustomRoutingAcceleratorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}