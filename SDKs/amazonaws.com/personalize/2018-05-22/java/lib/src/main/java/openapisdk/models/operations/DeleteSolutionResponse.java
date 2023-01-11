package openapisdk.models.operations;



public class DeleteSolutionResponse {
    public String contentType;
    public DeleteSolutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public DeleteSolutionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteSolutionResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteSolutionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteSolutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}