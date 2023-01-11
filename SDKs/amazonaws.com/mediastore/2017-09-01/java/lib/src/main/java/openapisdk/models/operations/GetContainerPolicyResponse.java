package openapisdk.models.operations;



public class GetContainerPolicyResponse {
    public Object containerInUseException;
    public GetContainerPolicyResponse withContainerInUseException(Object containerInUseException) {
        this.containerInUseException = containerInUseException;
        return this;
    }
    public Object containerNotFoundException;
    public GetContainerPolicyResponse withContainerNotFoundException(Object containerNotFoundException) {
        this.containerNotFoundException = containerNotFoundException;
        return this;
    }
    public String contentType;
    public GetContainerPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetContainerPolicyOutput getContainerPolicyOutput;
    public GetContainerPolicyResponse withGetContainerPolicyOutput(openapisdk.models.shared.GetContainerPolicyOutput getContainerPolicyOutput) {
        this.getContainerPolicyOutput = getContainerPolicyOutput;
        return this;
    }
    public Object internalServerError;
    public GetContainerPolicyResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object policyNotFoundException;
    public GetContainerPolicyResponse withPolicyNotFoundException(Object policyNotFoundException) {
        this.policyNotFoundException = policyNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetContainerPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}