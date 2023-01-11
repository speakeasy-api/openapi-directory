package openapisdk.models.operations;



public class DeleteCorsPolicyResponse {
    public Object containerInUseException;
    public DeleteCorsPolicyResponse withContainerInUseException(Object containerInUseException) {
        this.containerInUseException = containerInUseException;
        return this;
    }
    public Object containerNotFoundException;
    public DeleteCorsPolicyResponse withContainerNotFoundException(Object containerNotFoundException) {
        this.containerNotFoundException = containerNotFoundException;
        return this;
    }
    public String contentType;
    public DeleteCorsPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object corsPolicyNotFoundException;
    public DeleteCorsPolicyResponse withCorsPolicyNotFoundException(Object corsPolicyNotFoundException) {
        this.corsPolicyNotFoundException = corsPolicyNotFoundException;
        return this;
    }
    public java.util.Map<String, Object> deleteCorsPolicyOutput;
    public DeleteCorsPolicyResponse withDeleteCorsPolicyOutput(java.util.Map<String, Object> deleteCorsPolicyOutput) {
        this.deleteCorsPolicyOutput = deleteCorsPolicyOutput;
        return this;
    }
    public Object internalServerError;
    public DeleteCorsPolicyResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public DeleteCorsPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}