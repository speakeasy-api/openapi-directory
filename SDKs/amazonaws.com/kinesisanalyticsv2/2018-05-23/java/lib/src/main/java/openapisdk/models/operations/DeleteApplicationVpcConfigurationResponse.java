package openapisdk.models.operations;



public class DeleteApplicationVpcConfigurationResponse {
    public Object concurrentModificationException;
    public DeleteApplicationVpcConfigurationResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteApplicationVpcConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteApplicationVpcConfigurationResponse deleteApplicationVpcConfigurationResponse;
    public DeleteApplicationVpcConfigurationResponse withDeleteApplicationVpcConfigurationResponse(openapisdk.models.shared.DeleteApplicationVpcConfigurationResponse deleteApplicationVpcConfigurationResponse) {
        this.deleteApplicationVpcConfigurationResponse = deleteApplicationVpcConfigurationResponse;
        return this;
    }
    public Object invalidApplicationConfigurationException;
    public DeleteApplicationVpcConfigurationResponse withInvalidApplicationConfigurationException(Object invalidApplicationConfigurationException) {
        this.invalidApplicationConfigurationException = invalidApplicationConfigurationException;
        return this;
    }
    public Object invalidArgumentException;
    public DeleteApplicationVpcConfigurationResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteApplicationVpcConfigurationResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteApplicationVpcConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteApplicationVpcConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}