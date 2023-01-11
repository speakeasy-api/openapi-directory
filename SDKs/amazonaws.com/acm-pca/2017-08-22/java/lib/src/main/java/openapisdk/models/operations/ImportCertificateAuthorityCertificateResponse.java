package openapisdk.models.operations;



public class ImportCertificateAuthorityCertificateResponse {
    public Object certificateMismatchException;
    public ImportCertificateAuthorityCertificateResponse withCertificateMismatchException(Object certificateMismatchException) {
        this.certificateMismatchException = certificateMismatchException;
        return this;
    }
    public Object concurrentModificationException;
    public ImportCertificateAuthorityCertificateResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public ImportCertificateAuthorityCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArnException;
    public ImportCertificateAuthorityCertificateResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidRequestException;
    public ImportCertificateAuthorityCertificateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidStateException;
    public ImportCertificateAuthorityCertificateResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object malformedCertificateException;
    public ImportCertificateAuthorityCertificateResponse withMalformedCertificateException(Object malformedCertificateException) {
        this.malformedCertificateException = malformedCertificateException;
        return this;
    }
    public Object requestFailedException;
    public ImportCertificateAuthorityCertificateResponse withRequestFailedException(Object requestFailedException) {
        this.requestFailedException = requestFailedException;
        return this;
    }
    public Object requestInProgressException;
    public ImportCertificateAuthorityCertificateResponse withRequestInProgressException(Object requestInProgressException) {
        this.requestInProgressException = requestInProgressException;
        return this;
    }
    public Object resourceNotFoundException;
    public ImportCertificateAuthorityCertificateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ImportCertificateAuthorityCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}