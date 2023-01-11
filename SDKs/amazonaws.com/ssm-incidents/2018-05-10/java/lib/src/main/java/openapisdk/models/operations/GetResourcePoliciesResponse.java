package openapisdk.models.operations;



public class GetResourcePoliciesResponse {
    public Object accessDeniedException;
    public GetResourcePoliciesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetResourcePoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetResourcePoliciesOutput getResourcePoliciesOutput;
    public GetResourcePoliciesResponse withGetResourcePoliciesOutput(openapisdk.models.shared.GetResourcePoliciesOutput getResourcePoliciesOutput) {
        this.getResourcePoliciesOutput = getResourcePoliciesOutput;
        return this;
    }
    public Object internalServerException;
    public GetResourcePoliciesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetResourcePoliciesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetResourcePoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetResourcePoliciesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetResourcePoliciesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}