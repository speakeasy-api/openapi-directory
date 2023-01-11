package openapisdk.models.operations;



public class DescribeCertificateAuthorityResponse {
    public String contentType;
    public DescribeCertificateAuthorityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeCertificateAuthorityResponse describeCertificateAuthorityResponse;
    public DescribeCertificateAuthorityResponse withDescribeCertificateAuthorityResponse(openapisdk.models.shared.DescribeCertificateAuthorityResponse describeCertificateAuthorityResponse) {
        this.describeCertificateAuthorityResponse = describeCertificateAuthorityResponse;
        return this;
    }
    public Object invalidArnException;
    public DescribeCertificateAuthorityResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeCertificateAuthorityResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeCertificateAuthorityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}