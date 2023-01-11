package openapisdk.models.operations;



public class AddApplicationVpcConfigurationResponse {
    public openapisdk.models.shared.AddApplicationVpcConfigurationResponse addApplicationVpcConfigurationResponse;
    public AddApplicationVpcConfigurationResponse withAddApplicationVpcConfigurationResponse(openapisdk.models.shared.AddApplicationVpcConfigurationResponse addApplicationVpcConfigurationResponse) {
        this.addApplicationVpcConfigurationResponse = addApplicationVpcConfigurationResponse;
        return this;
    }
    public Object concurrentModificationException;
    public AddApplicationVpcConfigurationResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public AddApplicationVpcConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidApplicationConfigurationException;
    public AddApplicationVpcConfigurationResponse withInvalidApplicationConfigurationException(Object invalidApplicationConfigurationException) {
        this.invalidApplicationConfigurationException = invalidApplicationConfigurationException;
        return this;
    }
    public Object invalidArgumentException;
    public AddApplicationVpcConfigurationResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object resourceInUseException;
    public AddApplicationVpcConfigurationResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public AddApplicationVpcConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AddApplicationVpcConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}