package openapisdk.models.operations;



public class ResendValidationEmailResponse {
    public String contentType;
    public ResendValidationEmailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArnException;
    public ResendValidationEmailResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidDomainValidationOptionsException;
    public ResendValidationEmailResponse withInvalidDomainValidationOptionsException(Object invalidDomainValidationOptionsException) {
        this.invalidDomainValidationOptionsException = invalidDomainValidationOptionsException;
        return this;
    }
    public Object invalidStateException;
    public ResendValidationEmailResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object resourceNotFoundException;
    public ResendValidationEmailResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ResendValidationEmailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}