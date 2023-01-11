package openapisdk.models.operations;



public class DescribeCertificatesResponse {
    public String contentType;
    public DescribeCertificatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeCertificatesResponse describeCertificatesResponse;
    public DescribeCertificatesResponse withDescribeCertificatesResponse(openapisdk.models.shared.DescribeCertificatesResponse describeCertificatesResponse) {
        this.describeCertificatesResponse = describeCertificatesResponse;
        return this;
    }
    public Object resourceNotFoundFault;
    public DescribeCertificatesResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DescribeCertificatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}