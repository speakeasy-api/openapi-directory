package openapisdk.models.operations;



public class DescribeCertificateResponse {
    public Object certificateDoesNotExistException;
    public DescribeCertificateResponse withCertificateDoesNotExistException(Object certificateDoesNotExistException) {
        this.certificateDoesNotExistException = certificateDoesNotExistException;
        return this;
    }
    public Object clientException;
    public DescribeCertificateResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DescribeCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeCertificateResult describeCertificateResult;
    public DescribeCertificateResponse withDescribeCertificateResult(openapisdk.models.shared.DescribeCertificateResult describeCertificateResult) {
        this.describeCertificateResult = describeCertificateResult;
        return this;
    }
    public Object directoryDoesNotExistException;
    public DescribeCertificateResponse withDirectoryDoesNotExistException(Object directoryDoesNotExistException) {
        this.directoryDoesNotExistException = directoryDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeCertificateResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public DescribeCertificateResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DescribeCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public DescribeCertificateResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}