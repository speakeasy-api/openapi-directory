package openapisdk.models.operations;



public class DescribeCertificateResponse {
    public String contentType;
    public DescribeCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeCertificateResponse describeCertificateResponse;
    public DescribeCertificateResponse withDescribeCertificateResponse(openapisdk.models.shared.DescribeCertificateResponse describeCertificateResponse) {
        this.describeCertificateResponse = describeCertificateResponse;
        return this;
    }
    public Object invalidArnException;
    public DescribeCertificateResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeCertificateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}