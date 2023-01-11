package openapisdk.models.operations;



public class PutLifecyclePolicyResponse {
    public Object containerInUseException;
    public PutLifecyclePolicyResponse withContainerInUseException(Object containerInUseException) {
        this.containerInUseException = containerInUseException;
        return this;
    }
    public Object containerNotFoundException;
    public PutLifecyclePolicyResponse withContainerNotFoundException(Object containerNotFoundException) {
        this.containerNotFoundException = containerNotFoundException;
        return this;
    }
    public String contentType;
    public PutLifecyclePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public PutLifecyclePolicyResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public java.util.Map<String, Object> putLifecyclePolicyOutput;
    public PutLifecyclePolicyResponse withPutLifecyclePolicyOutput(java.util.Map<String, Object> putLifecyclePolicyOutput) {
        this.putLifecyclePolicyOutput = putLifecyclePolicyOutput;
        return this;
    }
    public Long statusCode;
    public PutLifecyclePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}