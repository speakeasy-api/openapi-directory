package openapisdk.models.operations;



public class PutResourceConfigResponse {
    public String contentType;
    public PutResourceConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object insufficientPermissionsException;
    public PutResourceConfigResponse withInsufficientPermissionsException(Object insufficientPermissionsException) {
        this.insufficientPermissionsException = insufficientPermissionsException;
        return this;
    }
    public Object maxActiveResourcesExceededException;
    public PutResourceConfigResponse withMaxActiveResourcesExceededException(Object maxActiveResourcesExceededException) {
        this.maxActiveResourcesExceededException = maxActiveResourcesExceededException;
        return this;
    }
    public Object noRunningConfigurationRecorderException;
    public PutResourceConfigResponse withNoRunningConfigurationRecorderException(Object noRunningConfigurationRecorderException) {
        this.noRunningConfigurationRecorderException = noRunningConfigurationRecorderException;
        return this;
    }
    public Long statusCode;
    public PutResourceConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public PutResourceConfigResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}