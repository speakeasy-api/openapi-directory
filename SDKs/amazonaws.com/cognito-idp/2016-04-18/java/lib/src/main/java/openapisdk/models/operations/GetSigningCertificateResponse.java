package openapisdk.models.operations;



public class GetSigningCertificateResponse {
    public String contentType;
    public GetSigningCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSigningCertificateResponse getSigningCertificateResponse;
    public GetSigningCertificateResponse withGetSigningCertificateResponse(openapisdk.models.shared.GetSigningCertificateResponse getSigningCertificateResponse) {
        this.getSigningCertificateResponse = getSigningCertificateResponse;
        return this;
    }
    public Object internalErrorException;
    public GetSigningCertificateResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public GetSigningCertificateResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetSigningCertificateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetSigningCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}