package openapisdk.models.operations;



public class ListGroupCertificateAuthoritiesResponse {
    public Object badRequestException;
    public ListGroupCertificateAuthoritiesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListGroupCertificateAuthoritiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public ListGroupCertificateAuthoritiesResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public openapisdk.models.shared.ListGroupCertificateAuthoritiesResponse listGroupCertificateAuthoritiesResponse;
    public ListGroupCertificateAuthoritiesResponse withListGroupCertificateAuthoritiesResponse(openapisdk.models.shared.ListGroupCertificateAuthoritiesResponse listGroupCertificateAuthoritiesResponse) {
        this.listGroupCertificateAuthoritiesResponse = listGroupCertificateAuthoritiesResponse;
        return this;
    }
    public Long statusCode;
    public ListGroupCertificateAuthoritiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}