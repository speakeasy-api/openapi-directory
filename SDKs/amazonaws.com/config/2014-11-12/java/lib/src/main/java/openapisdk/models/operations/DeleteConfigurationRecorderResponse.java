package openapisdk.models.operations;



public class DeleteConfigurationRecorderResponse {
    public String contentType;
    public DeleteConfigurationRecorderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object noSuchConfigurationRecorderException;
    public DeleteConfigurationRecorderResponse withNoSuchConfigurationRecorderException(Object noSuchConfigurationRecorderException) {
        this.noSuchConfigurationRecorderException = noSuchConfigurationRecorderException;
        return this;
    }
    public Long statusCode;
    public DeleteConfigurationRecorderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}