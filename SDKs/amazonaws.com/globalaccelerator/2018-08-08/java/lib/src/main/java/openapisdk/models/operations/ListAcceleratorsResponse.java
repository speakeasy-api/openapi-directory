package openapisdk.models.operations;



public class ListAcceleratorsResponse {
    public String contentType;
    public ListAcceleratorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public ListAcceleratorsResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public ListAcceleratorsResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListAcceleratorsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListAcceleratorsResponse listAcceleratorsResponse;
    public ListAcceleratorsResponse withListAcceleratorsResponse(openapisdk.models.shared.ListAcceleratorsResponse listAcceleratorsResponse) {
        this.listAcceleratorsResponse = listAcceleratorsResponse;
        return this;
    }
    public Long statusCode;
    public ListAcceleratorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}