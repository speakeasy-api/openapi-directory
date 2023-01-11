package openapisdk.models.operations;



public class StartAccessLoggingResponse {
    public Object containerInUseException;
    public StartAccessLoggingResponse withContainerInUseException(Object containerInUseException) {
        this.containerInUseException = containerInUseException;
        return this;
    }
    public Object containerNotFoundException;
    public StartAccessLoggingResponse withContainerNotFoundException(Object containerNotFoundException) {
        this.containerNotFoundException = containerNotFoundException;
        return this;
    }
    public String contentType;
    public StartAccessLoggingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public StartAccessLoggingResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public java.util.Map<String, Object> startAccessLoggingOutput;
    public StartAccessLoggingResponse withStartAccessLoggingOutput(java.util.Map<String, Object> startAccessLoggingOutput) {
        this.startAccessLoggingOutput = startAccessLoggingOutput;
        return this;
    }
    public Long statusCode;
    public StartAccessLoggingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}