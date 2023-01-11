package openapisdk.models.operations;



public class UpdateDomainNameResponse {
    public Object badRequestException;
    public UpdateDomainNameResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public UpdateDomainNameResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateDomainNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public UpdateDomainNameResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateDomainNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateDomainNameResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateDomainNameResponse updateDomainNameResponse;
    public UpdateDomainNameResponse withUpdateDomainNameResponse(openapisdk.models.shared.UpdateDomainNameResponse updateDomainNameResponse) {
        this.updateDomainNameResponse = updateDomainNameResponse;
        return this;
    }
}