package openapisdk.models.operations;



public class GetDefaultRetentionPolicyResponse {
    public String contentType;
    public GetDefaultRetentionPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetDefaultRetentionPolicyResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetDefaultRetentionPolicyResponse getDefaultRetentionPolicyResponse;
    public GetDefaultRetentionPolicyResponse withGetDefaultRetentionPolicyResponse(openapisdk.models.shared.GetDefaultRetentionPolicyResponse getDefaultRetentionPolicyResponse) {
        this.getDefaultRetentionPolicyResponse = getDefaultRetentionPolicyResponse;
        return this;
    }
    public Object invalidParameterException;
    public GetDefaultRetentionPolicyResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object organizationNotFoundException;
    public GetDefaultRetentionPolicyResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public GetDefaultRetentionPolicyResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public GetDefaultRetentionPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}