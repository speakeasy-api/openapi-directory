package openapisdk.models.operations;



public class PutContainerPolicyResponse {
    public Object containerInUseException;
    public PutContainerPolicyResponse withContainerInUseException(Object containerInUseException) {
        this.containerInUseException = containerInUseException;
        return this;
    }
    public Object containerNotFoundException;
    public PutContainerPolicyResponse withContainerNotFoundException(Object containerNotFoundException) {
        this.containerNotFoundException = containerNotFoundException;
        return this;
    }
    public String contentType;
    public PutContainerPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public PutContainerPolicyResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public java.util.Map<String, Object> putContainerPolicyOutput;
    public PutContainerPolicyResponse withPutContainerPolicyOutput(java.util.Map<String, Object> putContainerPolicyOutput) {
        this.putContainerPolicyOutput = putContainerPolicyOutput;
        return this;
    }
    public Long statusCode;
    public PutContainerPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}