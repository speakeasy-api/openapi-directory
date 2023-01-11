package openapisdk.models.operations;



public class RevokeDomainAccessResponse {
    public String contentType;
    public RevokeDomainAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public RevokeDomainAccessResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object invalidRequestException;
    public RevokeDomainAccessResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public RevokeDomainAccessResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public java.util.Map<String, Object> revokeDomainAccessResponse;
    public RevokeDomainAccessResponse withRevokeDomainAccessResponse(java.util.Map<String, Object> revokeDomainAccessResponse) {
        this.revokeDomainAccessResponse = revokeDomainAccessResponse;
        return this;
    }
    public Long statusCode;
    public RevokeDomainAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public RevokeDomainAccessResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unauthorizedException;
    public RevokeDomainAccessResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}