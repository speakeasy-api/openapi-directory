package openapisdk.models.operations;



public class GetGroupCertificateAuthorityResponse {
    public Object badRequestException;
    public GetGroupCertificateAuthorityResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetGroupCertificateAuthorityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetGroupCertificateAuthorityResponse getGroupCertificateAuthorityResponse;
    public GetGroupCertificateAuthorityResponse withGetGroupCertificateAuthorityResponse(openapisdk.models.shared.GetGroupCertificateAuthorityResponse getGroupCertificateAuthorityResponse) {
        this.getGroupCertificateAuthorityResponse = getGroupCertificateAuthorityResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetGroupCertificateAuthorityResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Long statusCode;
    public GetGroupCertificateAuthorityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}