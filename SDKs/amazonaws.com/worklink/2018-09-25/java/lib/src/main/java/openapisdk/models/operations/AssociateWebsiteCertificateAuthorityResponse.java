package openapisdk.models.operations;



public class AssociateWebsiteCertificateAuthorityResponse {
    public openapisdk.models.shared.AssociateWebsiteCertificateAuthorityResponse associateWebsiteCertificateAuthorityResponse;
    public AssociateWebsiteCertificateAuthorityResponse withAssociateWebsiteCertificateAuthorityResponse(openapisdk.models.shared.AssociateWebsiteCertificateAuthorityResponse associateWebsiteCertificateAuthorityResponse) {
        this.associateWebsiteCertificateAuthorityResponse = associateWebsiteCertificateAuthorityResponse;
        return this;
    }
    public String contentType;
    public AssociateWebsiteCertificateAuthorityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public AssociateWebsiteCertificateAuthorityResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object invalidRequestException;
    public AssociateWebsiteCertificateAuthorityResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public AssociateWebsiteCertificateAuthorityResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateWebsiteCertificateAuthorityResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AssociateWebsiteCertificateAuthorityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public AssociateWebsiteCertificateAuthorityResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unauthorizedException;
    public AssociateWebsiteCertificateAuthorityResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}