package openapisdk.models.operations;



public class DeleteLifecyclePolicyResponse {
    public Object containerInUseException;
    public DeleteLifecyclePolicyResponse withContainerInUseException(Object containerInUseException) {
        this.containerInUseException = containerInUseException;
        return this;
    }
    public Object containerNotFoundException;
    public DeleteLifecyclePolicyResponse withContainerNotFoundException(Object containerNotFoundException) {
        this.containerNotFoundException = containerNotFoundException;
        return this;
    }
    public String contentType;
    public DeleteLifecyclePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteLifecyclePolicyOutput;
    public DeleteLifecyclePolicyResponse withDeleteLifecyclePolicyOutput(java.util.Map<String, Object> deleteLifecyclePolicyOutput) {
        this.deleteLifecyclePolicyOutput = deleteLifecyclePolicyOutput;
        return this;
    }
    public Object internalServerError;
    public DeleteLifecyclePolicyResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object policyNotFoundException;
    public DeleteLifecyclePolicyResponse withPolicyNotFoundException(Object policyNotFoundException) {
        this.policyNotFoundException = policyNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteLifecyclePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}