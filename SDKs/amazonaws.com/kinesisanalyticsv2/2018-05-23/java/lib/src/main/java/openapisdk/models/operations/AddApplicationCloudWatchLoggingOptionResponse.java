package openapisdk.models.operations;



public class AddApplicationCloudWatchLoggingOptionResponse {
    public openapisdk.models.shared.AddApplicationCloudWatchLoggingOptionResponse addApplicationCloudWatchLoggingOptionResponse;
    public AddApplicationCloudWatchLoggingOptionResponse withAddApplicationCloudWatchLoggingOptionResponse(openapisdk.models.shared.AddApplicationCloudWatchLoggingOptionResponse addApplicationCloudWatchLoggingOptionResponse) {
        this.addApplicationCloudWatchLoggingOptionResponse = addApplicationCloudWatchLoggingOptionResponse;
        return this;
    }
    public Object concurrentModificationException;
    public AddApplicationCloudWatchLoggingOptionResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public AddApplicationCloudWatchLoggingOptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidApplicationConfigurationException;
    public AddApplicationCloudWatchLoggingOptionResponse withInvalidApplicationConfigurationException(Object invalidApplicationConfigurationException) {
        this.invalidApplicationConfigurationException = invalidApplicationConfigurationException;
        return this;
    }
    public Object invalidArgumentException;
    public AddApplicationCloudWatchLoggingOptionResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidRequestException;
    public AddApplicationCloudWatchLoggingOptionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public AddApplicationCloudWatchLoggingOptionResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public AddApplicationCloudWatchLoggingOptionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AddApplicationCloudWatchLoggingOptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}