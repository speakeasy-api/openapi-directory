package openapisdk.models.operations;



public class CreateCertificateAuthorityResponse {
    public String contentType;
    public CreateCertificateAuthorityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateCertificateAuthorityResponse createCertificateAuthorityResponse;
    public CreateCertificateAuthorityResponse withCreateCertificateAuthorityResponse(openapisdk.models.shared.CreateCertificateAuthorityResponse createCertificateAuthorityResponse) {
        this.createCertificateAuthorityResponse = createCertificateAuthorityResponse;
        return this;
    }
    public Object invalidArgsException;
    public CreateCertificateAuthorityResponse withInvalidArgsException(Object invalidArgsException) {
        this.invalidArgsException = invalidArgsException;
        return this;
    }
    public Object invalidPolicyException;
    public CreateCertificateAuthorityResponse withInvalidPolicyException(Object invalidPolicyException) {
        this.invalidPolicyException = invalidPolicyException;
        return this;
    }
    public Object invalidTagException;
    public CreateCertificateAuthorityResponse withInvalidTagException(Object invalidTagException) {
        this.invalidTagException = invalidTagException;
        return this;
    }
    public Object limitExceededException;
    public CreateCertificateAuthorityResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateCertificateAuthorityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}