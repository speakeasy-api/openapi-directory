package openapisdk.models.operations;



public class StopConfigurationRecorderResponse {
    public String contentType;
    public StopConfigurationRecorderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object noSuchConfigurationRecorderException;
    public StopConfigurationRecorderResponse withNoSuchConfigurationRecorderException(Object noSuchConfigurationRecorderException) {
        this.noSuchConfigurationRecorderException = noSuchConfigurationRecorderException;
        return this;
    }
    public Long statusCode;
    public StopConfigurationRecorderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}