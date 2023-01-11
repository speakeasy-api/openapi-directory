package openapisdk.models.operations;



public class DeleteCertificateAuthorityResponse {
    public Object concurrentModificationException;
    public DeleteCertificateAuthorityResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteCertificateAuthorityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArnException;
    public DeleteCertificateAuthorityResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidStateException;
    public DeleteCertificateAuthorityResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteCertificateAuthorityResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteCertificateAuthorityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}