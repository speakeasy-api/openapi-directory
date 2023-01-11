package openapisdk.models.operations;



public class DeleteResourceConfigResponse {
    public String contentType;
    public DeleteResourceConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object noRunningConfigurationRecorderException;
    public DeleteResourceConfigResponse withNoRunningConfigurationRecorderException(Object noRunningConfigurationRecorderException) {
        this.noRunningConfigurationRecorderException = noRunningConfigurationRecorderException;
        return this;
    }
    public Long statusCode;
    public DeleteResourceConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteResourceConfigResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}