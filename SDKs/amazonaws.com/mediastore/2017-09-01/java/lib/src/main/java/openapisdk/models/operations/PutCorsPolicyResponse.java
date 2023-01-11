package openapisdk.models.operations;



public class PutCorsPolicyResponse {
    public Object containerInUseException;
    public PutCorsPolicyResponse withContainerInUseException(Object containerInUseException) {
        this.containerInUseException = containerInUseException;
        return this;
    }
    public Object containerNotFoundException;
    public PutCorsPolicyResponse withContainerNotFoundException(Object containerNotFoundException) {
        this.containerNotFoundException = containerNotFoundException;
        return this;
    }
    public String contentType;
    public PutCorsPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public PutCorsPolicyResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public java.util.Map<String, Object> putCorsPolicyOutput;
    public PutCorsPolicyResponse withPutCorsPolicyOutput(java.util.Map<String, Object> putCorsPolicyOutput) {
        this.putCorsPolicyOutput = putCorsPolicyOutput;
        return this;
    }
    public Long statusCode;
    public PutCorsPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}