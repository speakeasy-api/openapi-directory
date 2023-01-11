package openapisdk.models.operations;



public class GetLifecyclePolicyResponse {
    public Object containerInUseException;
    public GetLifecyclePolicyResponse withContainerInUseException(Object containerInUseException) {
        this.containerInUseException = containerInUseException;
        return this;
    }
    public Object containerNotFoundException;
    public GetLifecyclePolicyResponse withContainerNotFoundException(Object containerNotFoundException) {
        this.containerNotFoundException = containerNotFoundException;
        return this;
    }
    public String contentType;
    public GetLifecyclePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLifecyclePolicyOutput getLifecyclePolicyOutput;
    public GetLifecyclePolicyResponse withGetLifecyclePolicyOutput(openapisdk.models.shared.GetLifecyclePolicyOutput getLifecyclePolicyOutput) {
        this.getLifecyclePolicyOutput = getLifecyclePolicyOutput;
        return this;
    }
    public Object internalServerError;
    public GetLifecyclePolicyResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object policyNotFoundException;
    public GetLifecyclePolicyResponse withPolicyNotFoundException(Object policyNotFoundException) {
        this.policyNotFoundException = policyNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetLifecyclePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}