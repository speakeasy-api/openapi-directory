package openapisdk.models.operations;



public class GetCertificateAuthorityCertificateResponse {
    public String contentType;
    public GetCertificateAuthorityCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCertificateAuthorityCertificateResponse getCertificateAuthorityCertificateResponse;
    public GetCertificateAuthorityCertificateResponse withGetCertificateAuthorityCertificateResponse(openapisdk.models.shared.GetCertificateAuthorityCertificateResponse getCertificateAuthorityCertificateResponse) {
        this.getCertificateAuthorityCertificateResponse = getCertificateAuthorityCertificateResponse;
        return this;
    }
    public Object invalidArnException;
    public GetCertificateAuthorityCertificateResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidStateException;
    public GetCertificateAuthorityCertificateResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetCertificateAuthorityCertificateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetCertificateAuthorityCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}