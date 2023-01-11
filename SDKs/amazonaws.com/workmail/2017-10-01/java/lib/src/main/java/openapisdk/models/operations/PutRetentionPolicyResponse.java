package openapisdk.models.operations;



public class PutRetentionPolicyResponse {
    public String contentType;
    public PutRetentionPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public PutRetentionPolicyResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public PutRetentionPolicyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object organizationNotFoundException;
    public PutRetentionPolicyResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public PutRetentionPolicyResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public java.util.Map<String, Object> putRetentionPolicyResponse;
    public PutRetentionPolicyResponse withPutRetentionPolicyResponse(java.util.Map<String, Object> putRetentionPolicyResponse) {
        this.putRetentionPolicyResponse = putRetentionPolicyResponse;
        return this;
    }
    public Long statusCode;
    public PutRetentionPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}