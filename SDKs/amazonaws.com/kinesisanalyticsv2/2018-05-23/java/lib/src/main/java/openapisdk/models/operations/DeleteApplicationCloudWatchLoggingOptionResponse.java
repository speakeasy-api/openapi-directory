package openapisdk.models.operations;



public class DeleteApplicationCloudWatchLoggingOptionResponse {
    public Object concurrentModificationException;
    public DeleteApplicationCloudWatchLoggingOptionResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteApplicationCloudWatchLoggingOptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteApplicationCloudWatchLoggingOptionResponse deleteApplicationCloudWatchLoggingOptionResponse;
    public DeleteApplicationCloudWatchLoggingOptionResponse withDeleteApplicationCloudWatchLoggingOptionResponse(openapisdk.models.shared.DeleteApplicationCloudWatchLoggingOptionResponse deleteApplicationCloudWatchLoggingOptionResponse) {
        this.deleteApplicationCloudWatchLoggingOptionResponse = deleteApplicationCloudWatchLoggingOptionResponse;
        return this;
    }
    public Object invalidApplicationConfigurationException;
    public DeleteApplicationCloudWatchLoggingOptionResponse withInvalidApplicationConfigurationException(Object invalidApplicationConfigurationException) {
        this.invalidApplicationConfigurationException = invalidApplicationConfigurationException;
        return this;
    }
    public Object invalidArgumentException;
    public DeleteApplicationCloudWatchLoggingOptionResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteApplicationCloudWatchLoggingOptionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteApplicationCloudWatchLoggingOptionResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteApplicationCloudWatchLoggingOptionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteApplicationCloudWatchLoggingOptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}