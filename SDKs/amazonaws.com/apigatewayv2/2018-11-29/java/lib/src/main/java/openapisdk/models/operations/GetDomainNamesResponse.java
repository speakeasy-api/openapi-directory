package openapisdk.models.operations;



public class GetDomainNamesResponse {
    public Object badRequestException;
    public GetDomainNamesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetDomainNamesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDomainNamesResponse getDomainNamesResponse;
    public GetDomainNamesResponse withGetDomainNamesResponse(openapisdk.models.shared.GetDomainNamesResponse getDomainNamesResponse) {
        this.getDomainNamesResponse = getDomainNamesResponse;
        return this;
    }
    public Object notFoundException;
    public GetDomainNamesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetDomainNamesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetDomainNamesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}