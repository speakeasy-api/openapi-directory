package openapisdk.models.operations;



public class GetInlinePolicyForPermissionSetResponse {
    public Object accessDeniedException;
    public GetInlinePolicyForPermissionSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetInlinePolicyForPermissionSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetInlinePolicyForPermissionSetResponse getInlinePolicyForPermissionSetResponse;
    public GetInlinePolicyForPermissionSetResponse withGetInlinePolicyForPermissionSetResponse(openapisdk.models.shared.GetInlinePolicyForPermissionSetResponse getInlinePolicyForPermissionSetResponse) {
        this.getInlinePolicyForPermissionSetResponse = getInlinePolicyForPermissionSetResponse;
        return this;
    }
    public Object internalServerException;
    public GetInlinePolicyForPermissionSetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetInlinePolicyForPermissionSetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetInlinePolicyForPermissionSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetInlinePolicyForPermissionSetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetInlinePolicyForPermissionSetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}