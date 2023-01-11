package openapisdk.models.operations;



public class CreateSolutionResponse {
    public String contentType;
    public CreateSolutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSolutionResponse createSolutionResponse;
    public CreateSolutionResponse withCreateSolutionResponse(openapisdk.models.shared.CreateSolutionResponse createSolutionResponse) {
        this.createSolutionResponse = createSolutionResponse;
        return this;
    }
    public Object invalidInputException;
    public CreateSolutionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public CreateSolutionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateSolutionResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceInUseException;
    public CreateSolutionResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateSolutionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateSolutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}