package openapisdk.models.operations;



public class UpdateCertificateAuthorityResponse {
    public Object concurrentModificationException;
    public UpdateCertificateAuthorityResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public UpdateCertificateAuthorityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgsException;
    public UpdateCertificateAuthorityResponse withInvalidArgsException(Object invalidArgsException) {
        this.invalidArgsException = invalidArgsException;
        return this;
    }
    public Object invalidArnException;
    public UpdateCertificateAuthorityResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidPolicyException;
    public UpdateCertificateAuthorityResponse withInvalidPolicyException(Object invalidPolicyException) {
        this.invalidPolicyException = invalidPolicyException;
        return this;
    }
    public Object invalidStateException;
    public UpdateCertificateAuthorityResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateCertificateAuthorityResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateCertificateAuthorityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}