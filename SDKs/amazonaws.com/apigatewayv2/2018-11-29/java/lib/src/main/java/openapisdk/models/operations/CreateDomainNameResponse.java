package openapisdk.models.operations;



public class CreateDomainNameResponse {
    public Object accessDeniedException;
    public CreateDomainNameResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object badRequestException;
    public CreateDomainNameResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public CreateDomainNameResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateDomainNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDomainNameResponse createDomainNameResponse;
    public CreateDomainNameResponse withCreateDomainNameResponse(openapisdk.models.shared.CreateDomainNameResponse createDomainNameResponse) {
        this.createDomainNameResponse = createDomainNameResponse;
        return this;
    }
    public Object notFoundException;
    public CreateDomainNameResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateDomainNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateDomainNameResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}