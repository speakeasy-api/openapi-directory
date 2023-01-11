package openapisdk.models.operations;



public class AddApplicationInputProcessingConfigurationResponse {
    public openapisdk.models.shared.AddApplicationInputProcessingConfigurationResponse addApplicationInputProcessingConfigurationResponse;
    public AddApplicationInputProcessingConfigurationResponse withAddApplicationInputProcessingConfigurationResponse(openapisdk.models.shared.AddApplicationInputProcessingConfigurationResponse addApplicationInputProcessingConfigurationResponse) {
        this.addApplicationInputProcessingConfigurationResponse = addApplicationInputProcessingConfigurationResponse;
        return this;
    }
    public Object concurrentModificationException;
    public AddApplicationInputProcessingConfigurationResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public AddApplicationInputProcessingConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public AddApplicationInputProcessingConfigurationResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidRequestException;
    public AddApplicationInputProcessingConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public AddApplicationInputProcessingConfigurationResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public AddApplicationInputProcessingConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AddApplicationInputProcessingConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}