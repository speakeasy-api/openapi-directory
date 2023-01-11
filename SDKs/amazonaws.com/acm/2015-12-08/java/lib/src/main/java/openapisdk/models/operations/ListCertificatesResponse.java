package openapisdk.models.operations;



public class ListCertificatesResponse {
    public String contentType;
    public ListCertificatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgsException;
    public ListCertificatesResponse withInvalidArgsException(Object invalidArgsException) {
        this.invalidArgsException = invalidArgsException;
        return this;
    }
    public openapisdk.models.shared.ListCertificatesResponse listCertificatesResponse;
    public ListCertificatesResponse withListCertificatesResponse(openapisdk.models.shared.ListCertificatesResponse listCertificatesResponse) {
        this.listCertificatesResponse = listCertificatesResponse;
        return this;
    }
    public Long statusCode;
    public ListCertificatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}