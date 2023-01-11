package openapisdk.models.operations;



public class DeleteRetentionPolicyResponse {
    public String contentType;
    public DeleteRetentionPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteRetentionPolicyResponse;
    public DeleteRetentionPolicyResponse withDeleteRetentionPolicyResponse(java.util.Map<String, Object> deleteRetentionPolicyResponse) {
        this.deleteRetentionPolicyResponse = deleteRetentionPolicyResponse;
        return this;
    }
    public Object invalidParameterException;
    public DeleteRetentionPolicyResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object organizationNotFoundException;
    public DeleteRetentionPolicyResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public DeleteRetentionPolicyResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public DeleteRetentionPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}