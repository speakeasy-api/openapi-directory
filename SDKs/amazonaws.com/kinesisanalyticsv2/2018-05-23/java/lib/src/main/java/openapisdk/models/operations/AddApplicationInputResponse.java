package openapisdk.models.operations;



public class AddApplicationInputResponse {
    public openapisdk.models.shared.AddApplicationInputResponse addApplicationInputResponse;
    public AddApplicationInputResponse withAddApplicationInputResponse(openapisdk.models.shared.AddApplicationInputResponse addApplicationInputResponse) {
        this.addApplicationInputResponse = addApplicationInputResponse;
        return this;
    }
    public Object codeValidationException;
    public AddApplicationInputResponse withCodeValidationException(Object codeValidationException) {
        this.codeValidationException = codeValidationException;
        return this;
    }
    public Object concurrentModificationException;
    public AddApplicationInputResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public AddApplicationInputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public AddApplicationInputResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidRequestException;
    public AddApplicationInputResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public AddApplicationInputResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public AddApplicationInputResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AddApplicationInputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}