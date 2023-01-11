package openapisdk.models.operations;



public class AllowCustomRoutingTrafficResponse {
    public String contentType;
    public AllowCustomRoutingTrafficResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public AllowCustomRoutingTrafficResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public AllowCustomRoutingTrafficResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Long statusCode;
    public AllowCustomRoutingTrafficResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}