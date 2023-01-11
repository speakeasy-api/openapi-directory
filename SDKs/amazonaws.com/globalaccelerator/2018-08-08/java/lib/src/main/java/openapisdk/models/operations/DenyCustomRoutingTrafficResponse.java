package openapisdk.models.operations;



public class DenyCustomRoutingTrafficResponse {
    public String contentType;
    public DenyCustomRoutingTrafficResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public DenyCustomRoutingTrafficResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public DenyCustomRoutingTrafficResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Long statusCode;
    public DenyCustomRoutingTrafficResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}