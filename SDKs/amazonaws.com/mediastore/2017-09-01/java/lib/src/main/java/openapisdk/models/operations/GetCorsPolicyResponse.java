package openapisdk.models.operations;



public class GetCorsPolicyResponse {
    public Object containerInUseException;
    public GetCorsPolicyResponse withContainerInUseException(Object containerInUseException) {
        this.containerInUseException = containerInUseException;
        return this;
    }
    public Object containerNotFoundException;
    public GetCorsPolicyResponse withContainerNotFoundException(Object containerNotFoundException) {
        this.containerNotFoundException = containerNotFoundException;
        return this;
    }
    public String contentType;
    public GetCorsPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object corsPolicyNotFoundException;
    public GetCorsPolicyResponse withCorsPolicyNotFoundException(Object corsPolicyNotFoundException) {
        this.corsPolicyNotFoundException = corsPolicyNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetCorsPolicyOutput getCorsPolicyOutput;
    public GetCorsPolicyResponse withGetCorsPolicyOutput(openapisdk.models.shared.GetCorsPolicyOutput getCorsPolicyOutput) {
        this.getCorsPolicyOutput = getCorsPolicyOutput;
        return this;
    }
    public Object internalServerError;
    public GetCorsPolicyResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public GetCorsPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}