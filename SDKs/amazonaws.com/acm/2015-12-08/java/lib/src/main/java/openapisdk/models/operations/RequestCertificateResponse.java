package openapisdk.models.operations;



public class RequestCertificateResponse {
    public String contentType;
    public RequestCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArnException;
    public RequestCertificateResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidDomainValidationOptionsException;
    public RequestCertificateResponse withInvalidDomainValidationOptionsException(Object invalidDomainValidationOptionsException) {
        this.invalidDomainValidationOptionsException = invalidDomainValidationOptionsException;
        return this;
    }
    public Object invalidParameterException;
    public RequestCertificateResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidTagException;
    public RequestCertificateResponse withInvalidTagException(Object invalidTagException) {
        this.invalidTagException = invalidTagException;
        return this;
    }
    public Object limitExceededException;
    public RequestCertificateResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.RequestCertificateResponse requestCertificateResponse;
    public RequestCertificateResponse withRequestCertificateResponse(openapisdk.models.shared.RequestCertificateResponse requestCertificateResponse) {
        this.requestCertificateResponse = requestCertificateResponse;
        return this;
    }
    public Long statusCode;
    public RequestCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagPolicyException;
    public RequestCertificateResponse withTagPolicyException(Object tagPolicyException) {
        this.tagPolicyException = tagPolicyException;
        return this;
    }
    public Object tooManyTagsException;
    public RequestCertificateResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
}