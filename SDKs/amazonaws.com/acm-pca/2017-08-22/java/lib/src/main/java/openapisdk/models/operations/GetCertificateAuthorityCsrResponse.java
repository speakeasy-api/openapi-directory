package openapisdk.models.operations;



public class GetCertificateAuthorityCsrResponse {
    public String contentType;
    public GetCertificateAuthorityCsrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCertificateAuthorityCsrResponse getCertificateAuthorityCsrResponse;
    public GetCertificateAuthorityCsrResponse withGetCertificateAuthorityCsrResponse(openapisdk.models.shared.GetCertificateAuthorityCsrResponse getCertificateAuthorityCsrResponse) {
        this.getCertificateAuthorityCsrResponse = getCertificateAuthorityCsrResponse;
        return this;
    }
    public Object invalidArnException;
    public GetCertificateAuthorityCsrResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidStateException;
    public GetCertificateAuthorityCsrResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object requestFailedException;
    public GetCertificateAuthorityCsrResponse withRequestFailedException(Object requestFailedException) {
        this.requestFailedException = requestFailedException;
        return this;
    }
    public Object requestInProgressException;
    public GetCertificateAuthorityCsrResponse withRequestInProgressException(Object requestInProgressException) {
        this.requestInProgressException = requestInProgressException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetCertificateAuthorityCsrResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetCertificateAuthorityCsrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}