package openapisdk.models.operations;



public class ListCertificateAuthoritiesResponse {
    public String contentType;
    public ListCertificateAuthoritiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListCertificateAuthoritiesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListCertificateAuthoritiesResponse listCertificateAuthoritiesResponse;
    public ListCertificateAuthoritiesResponse withListCertificateAuthoritiesResponse(openapisdk.models.shared.ListCertificateAuthoritiesResponse listCertificateAuthoritiesResponse) {
        this.listCertificateAuthoritiesResponse = listCertificateAuthoritiesResponse;
        return this;
    }
    public Long statusCode;
    public ListCertificateAuthoritiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}