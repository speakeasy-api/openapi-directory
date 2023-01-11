package openapisdk.models.operations;



public class DeleteApplicationInputProcessingConfigurationResponse {
    public Object concurrentModificationException;
    public DeleteApplicationInputProcessingConfigurationResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteApplicationInputProcessingConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteApplicationInputProcessingConfigurationResponse deleteApplicationInputProcessingConfigurationResponse;
    public DeleteApplicationInputProcessingConfigurationResponse withDeleteApplicationInputProcessingConfigurationResponse(openapisdk.models.shared.DeleteApplicationInputProcessingConfigurationResponse deleteApplicationInputProcessingConfigurationResponse) {
        this.deleteApplicationInputProcessingConfigurationResponse = deleteApplicationInputProcessingConfigurationResponse;
        return this;
    }
    public Object invalidArgumentException;
    public DeleteApplicationInputProcessingConfigurationResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteApplicationInputProcessingConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteApplicationInputProcessingConfigurationResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteApplicationInputProcessingConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteApplicationInputProcessingConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}