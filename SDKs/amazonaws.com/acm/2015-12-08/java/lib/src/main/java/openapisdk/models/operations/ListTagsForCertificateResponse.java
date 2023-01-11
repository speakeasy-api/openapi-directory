package openapisdk.models.operations;



public class ListTagsForCertificateResponse {
    public String contentType;
    public ListTagsForCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArnException;
    public ListTagsForCertificateResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.ListTagsForCertificateResponse listTagsForCertificateResponse;
    public ListTagsForCertificateResponse withListTagsForCertificateResponse(openapisdk.models.shared.ListTagsForCertificateResponse listTagsForCertificateResponse) {
        this.listTagsForCertificateResponse = listTagsForCertificateResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListTagsForCertificateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListTagsForCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}