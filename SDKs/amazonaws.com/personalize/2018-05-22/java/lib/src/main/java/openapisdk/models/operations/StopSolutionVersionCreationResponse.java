package openapisdk.models.operations;



public class StopSolutionVersionCreationResponse {
    public String contentType;
    public StopSolutionVersionCreationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public StopSolutionVersionCreationResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceInUseException;
    public StopSolutionVersionCreationResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public StopSolutionVersionCreationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopSolutionVersionCreationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}