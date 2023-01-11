package openapisdk.models.operations;



public class DeleteDomainNameResponse {
    public String contentType;
    public DeleteDomainNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public DeleteDomainNameResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteDomainNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteDomainNameResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}