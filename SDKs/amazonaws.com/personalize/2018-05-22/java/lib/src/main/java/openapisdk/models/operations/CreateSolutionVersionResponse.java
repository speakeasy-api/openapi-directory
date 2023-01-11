package openapisdk.models.operations;



public class CreateSolutionVersionResponse {
    public String contentType;
    public CreateSolutionVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSolutionVersionResponse createSolutionVersionResponse;
    public CreateSolutionVersionResponse withCreateSolutionVersionResponse(openapisdk.models.shared.CreateSolutionVersionResponse createSolutionVersionResponse) {
        this.createSolutionVersionResponse = createSolutionVersionResponse;
        return this;
    }
    public Object invalidInputException;
    public CreateSolutionVersionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public CreateSolutionVersionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceInUseException;
    public CreateSolutionVersionResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateSolutionVersionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateSolutionVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}