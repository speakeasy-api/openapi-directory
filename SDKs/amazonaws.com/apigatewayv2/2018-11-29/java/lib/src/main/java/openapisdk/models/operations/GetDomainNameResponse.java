package openapisdk.models.operations;



public class GetDomainNameResponse {
    public String contentType;
    public GetDomainNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDomainNameResponse getDomainNameResponse;
    public GetDomainNameResponse withGetDomainNameResponse(openapisdk.models.shared.GetDomainNameResponse getDomainNameResponse) {
        this.getDomainNameResponse = getDomainNameResponse;
        return this;
    }
    public Object notFoundException;
    public GetDomainNameResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetDomainNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetDomainNameResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}