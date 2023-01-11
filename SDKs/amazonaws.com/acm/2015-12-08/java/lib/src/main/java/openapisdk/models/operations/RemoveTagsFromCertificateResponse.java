package openapisdk.models.operations;



public class RemoveTagsFromCertificateResponse {
    public String contentType;
    public RemoveTagsFromCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArnException;
    public RemoveTagsFromCertificateResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidParameterException;
    public RemoveTagsFromCertificateResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidTagException;
    public RemoveTagsFromCertificateResponse withInvalidTagException(Object invalidTagException) {
        this.invalidTagException = invalidTagException;
        return this;
    }
    public Object resourceNotFoundException;
    public RemoveTagsFromCertificateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public RemoveTagsFromCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagPolicyException;
    public RemoveTagsFromCertificateResponse withTagPolicyException(Object tagPolicyException) {
        this.tagPolicyException = tagPolicyException;
        return this;
    }
    public Object throttlingException;
    public RemoveTagsFromCertificateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}