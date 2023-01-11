package openapisdk.models.operations;



public class DisassociateWebsiteCertificateAuthorityResponse {
    public String contentType;
    public DisassociateWebsiteCertificateAuthorityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateWebsiteCertificateAuthorityResponse;
    public DisassociateWebsiteCertificateAuthorityResponse withDisassociateWebsiteCertificateAuthorityResponse(java.util.Map<String, Object> disassociateWebsiteCertificateAuthorityResponse) {
        this.disassociateWebsiteCertificateAuthorityResponse = disassociateWebsiteCertificateAuthorityResponse;
        return this;
    }
    public Object internalServerErrorException;
    public DisassociateWebsiteCertificateAuthorityResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object invalidRequestException;
    public DisassociateWebsiteCertificateAuthorityResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateWebsiteCertificateAuthorityResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateWebsiteCertificateAuthorityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DisassociateWebsiteCertificateAuthorityResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unauthorizedException;
    public DisassociateWebsiteCertificateAuthorityResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}