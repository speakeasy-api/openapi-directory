package openapisdk.models.operations;



public class GetGeneratedPolicyResponse {
    public Object accessDeniedException;
    public GetGeneratedPolicyResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetGeneratedPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetGeneratedPolicyResponse getGeneratedPolicyResponse;
    public GetGeneratedPolicyResponse withGetGeneratedPolicyResponse(openapisdk.models.shared.GetGeneratedPolicyResponse getGeneratedPolicyResponse) {
        this.getGeneratedPolicyResponse = getGeneratedPolicyResponse;
        return this;
    }
    public Object internalServerException;
    public GetGeneratedPolicyResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public GetGeneratedPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetGeneratedPolicyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetGeneratedPolicyResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}