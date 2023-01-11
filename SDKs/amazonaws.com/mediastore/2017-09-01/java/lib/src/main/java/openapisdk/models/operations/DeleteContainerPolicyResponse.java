package openapisdk.models.operations;



public class DeleteContainerPolicyResponse {
    public Object containerInUseException;
    public DeleteContainerPolicyResponse withContainerInUseException(Object containerInUseException) {
        this.containerInUseException = containerInUseException;
        return this;
    }
    public Object containerNotFoundException;
    public DeleteContainerPolicyResponse withContainerNotFoundException(Object containerNotFoundException) {
        this.containerNotFoundException = containerNotFoundException;
        return this;
    }
    public String contentType;
    public DeleteContainerPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteContainerPolicyOutput;
    public DeleteContainerPolicyResponse withDeleteContainerPolicyOutput(java.util.Map<String, Object> deleteContainerPolicyOutput) {
        this.deleteContainerPolicyOutput = deleteContainerPolicyOutput;
        return this;
    }
    public Object internalServerError;
    public DeleteContainerPolicyResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object policyNotFoundException;
    public DeleteContainerPolicyResponse withPolicyNotFoundException(Object policyNotFoundException) {
        this.policyNotFoundException = policyNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteContainerPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}