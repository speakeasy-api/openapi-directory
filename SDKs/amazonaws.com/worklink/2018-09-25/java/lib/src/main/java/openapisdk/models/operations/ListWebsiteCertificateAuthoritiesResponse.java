package openapisdk.models.operations;



public class ListWebsiteCertificateAuthoritiesResponse {
    public String contentType;
    public ListWebsiteCertificateAuthoritiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public ListWebsiteCertificateAuthoritiesResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object invalidRequestException;
    public ListWebsiteCertificateAuthoritiesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListWebsiteCertificateAuthoritiesResponse listWebsiteCertificateAuthoritiesResponse;
    public ListWebsiteCertificateAuthoritiesResponse withListWebsiteCertificateAuthoritiesResponse(openapisdk.models.shared.ListWebsiteCertificateAuthoritiesResponse listWebsiteCertificateAuthoritiesResponse) {
        this.listWebsiteCertificateAuthoritiesResponse = listWebsiteCertificateAuthoritiesResponse;
        return this;
    }
    public Long statusCode;
    public ListWebsiteCertificateAuthoritiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListWebsiteCertificateAuthoritiesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unauthorizedException;
    public ListWebsiteCertificateAuthoritiesResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}