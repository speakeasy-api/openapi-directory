package openapisdk.models.operations;



public class IssueCertificateResponse {
    public String contentType;
    public IssueCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgsException;
    public IssueCertificateResponse withInvalidArgsException(Object invalidArgsException) {
        this.invalidArgsException = invalidArgsException;
        return this;
    }
    public Object invalidArnException;
    public IssueCertificateResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidStateException;
    public IssueCertificateResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public openapisdk.models.shared.IssueCertificateResponse issueCertificateResponse;
    public IssueCertificateResponse withIssueCertificateResponse(openapisdk.models.shared.IssueCertificateResponse issueCertificateResponse) {
        this.issueCertificateResponse = issueCertificateResponse;
        return this;
    }
    public Object limitExceededException;
    public IssueCertificateResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object malformedCSRException;
    public IssueCertificateResponse withMalformedCsrException(Object malformedCSRException) {
        this.malformedCSRException = malformedCSRException;
        return this;
    }
    public Object resourceNotFoundException;
    public IssueCertificateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public IssueCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}