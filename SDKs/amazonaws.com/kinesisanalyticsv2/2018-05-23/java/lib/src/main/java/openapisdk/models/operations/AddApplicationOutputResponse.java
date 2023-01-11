package openapisdk.models.operations;



public class AddApplicationOutputResponse {
    public openapisdk.models.shared.AddApplicationOutputResponse addApplicationOutputResponse;
    public AddApplicationOutputResponse withAddApplicationOutputResponse(openapisdk.models.shared.AddApplicationOutputResponse addApplicationOutputResponse) {
        this.addApplicationOutputResponse = addApplicationOutputResponse;
        return this;
    }
    public Object concurrentModificationException;
    public AddApplicationOutputResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public AddApplicationOutputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public AddApplicationOutputResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidRequestException;
    public AddApplicationOutputResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public AddApplicationOutputResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public AddApplicationOutputResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AddApplicationOutputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}