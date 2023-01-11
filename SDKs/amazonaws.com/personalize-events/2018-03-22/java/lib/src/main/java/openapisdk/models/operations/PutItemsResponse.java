package openapisdk.models.operations;



public class PutItemsResponse {
    public String contentType;
    public PutItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public PutItemsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceInUseException;
    public PutItemsResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public PutItemsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}