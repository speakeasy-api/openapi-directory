package openapisdk.models.operations;



public class TagResourceResponse {
    public Object containerInUseException;
    public TagResourceResponse withContainerInUseException(Object containerInUseException) {
        this.containerInUseException = containerInUseException;
        return this;
    }
    public Object containerNotFoundException;
    public TagResourceResponse withContainerNotFoundException(Object containerNotFoundException) {
        this.containerNotFoundException = containerNotFoundException;
        return this;
    }
    public String contentType;
    public TagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public TagResourceResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public TagResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> tagResourceOutput;
    public TagResourceResponse withTagResourceOutput(java.util.Map<String, Object> tagResourceOutput) {
        this.tagResourceOutput = tagResourceOutput;
        return this;
    }
}