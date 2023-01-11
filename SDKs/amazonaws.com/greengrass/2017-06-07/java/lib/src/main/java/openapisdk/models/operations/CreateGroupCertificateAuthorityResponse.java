package openapisdk.models.operations;



public class CreateGroupCertificateAuthorityResponse {
    public Object badRequestException;
    public CreateGroupCertificateAuthorityResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateGroupCertificateAuthorityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateGroupCertificateAuthorityResponse createGroupCertificateAuthorityResponse;
    public CreateGroupCertificateAuthorityResponse withCreateGroupCertificateAuthorityResponse(openapisdk.models.shared.CreateGroupCertificateAuthorityResponse createGroupCertificateAuthorityResponse) {
        this.createGroupCertificateAuthorityResponse = createGroupCertificateAuthorityResponse;
        return this;
    }
    public Object internalServerErrorException;
    public CreateGroupCertificateAuthorityResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Long statusCode;
    public CreateGroupCertificateAuthorityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}