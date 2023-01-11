package openapisdk.models.operations;



public class GetCertificateResponse {
    public String contentType;
    public GetCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCertificateResponse getCertificateResponse;
    public GetCertificateResponse withGetCertificateResponse(openapisdk.models.shared.GetCertificateResponse getCertificateResponse) {
        this.getCertificateResponse = getCertificateResponse;
        return this;
    }
    public Object invalidArnException;
    public GetCertificateResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidStateException;
    public GetCertificateResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object requestFailedException;
    public GetCertificateResponse withRequestFailedException(Object requestFailedException) {
        this.requestFailedException = requestFailedException;
        return this;
    }
    public Object requestInProgressException;
    public GetCertificateResponse withRequestInProgressException(Object requestInProgressException) {
        this.requestInProgressException = requestInProgressException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetCertificateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}