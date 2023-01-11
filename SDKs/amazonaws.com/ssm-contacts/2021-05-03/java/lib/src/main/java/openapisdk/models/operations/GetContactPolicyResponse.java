package openapisdk.models.operations;



public class GetContactPolicyResponse {
    public Object accessDeniedException;
    public GetContactPolicyResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetContactPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetContactPolicyResult getContactPolicyResult;
    public GetContactPolicyResponse withGetContactPolicyResult(openapisdk.models.shared.GetContactPolicyResult getContactPolicyResult) {
        this.getContactPolicyResult = getContactPolicyResult;
        return this;
    }
    public Object internalServerException;
    public GetContactPolicyResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetContactPolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetContactPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetContactPolicyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetContactPolicyResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}