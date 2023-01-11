package openapisdk.models.operations;



public class StopAccessLoggingResponse {
    public Object containerInUseException;
    public StopAccessLoggingResponse withContainerInUseException(Object containerInUseException) {
        this.containerInUseException = containerInUseException;
        return this;
    }
    public Object containerNotFoundException;
    public StopAccessLoggingResponse withContainerNotFoundException(Object containerNotFoundException) {
        this.containerNotFoundException = containerNotFoundException;
        return this;
    }
    public String contentType;
    public StopAccessLoggingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public StopAccessLoggingResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public StopAccessLoggingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> stopAccessLoggingOutput;
    public StopAccessLoggingResponse withStopAccessLoggingOutput(java.util.Map<String, Object> stopAccessLoggingOutput) {
        this.stopAccessLoggingOutput = stopAccessLoggingOutput;
        return this;
    }
}