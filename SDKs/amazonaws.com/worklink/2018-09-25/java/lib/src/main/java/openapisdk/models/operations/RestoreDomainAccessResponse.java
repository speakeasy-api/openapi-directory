package openapisdk.models.operations;



public class RestoreDomainAccessResponse {
    public String contentType;
    public RestoreDomainAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public RestoreDomainAccessResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object invalidRequestException;
    public RestoreDomainAccessResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public RestoreDomainAccessResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public java.util.Map<String, Object> restoreDomainAccessResponse;
    public RestoreDomainAccessResponse withRestoreDomainAccessResponse(java.util.Map<String, Object> restoreDomainAccessResponse) {
        this.restoreDomainAccessResponse = restoreDomainAccessResponse;
        return this;
    }
    public Long statusCode;
    public RestoreDomainAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public RestoreDomainAccessResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unauthorizedException;
    public RestoreDomainAccessResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}