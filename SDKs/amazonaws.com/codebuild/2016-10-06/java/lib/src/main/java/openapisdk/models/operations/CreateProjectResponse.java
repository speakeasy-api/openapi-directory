package openapisdk.models.operations;



public class CreateProjectResponse {
    public Object accountLimitExceededException;
    public CreateProjectResponse withAccountLimitExceededException(Object accountLimitExceededException) {
        this.accountLimitExceededException = accountLimitExceededException;
        return this;
    }
    public String contentType;
    public CreateProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateProjectOutput createProjectOutput;
    public CreateProjectResponse withCreateProjectOutput(openapisdk.models.shared.CreateProjectOutput createProjectOutput) {
        this.createProjectOutput = createProjectOutput;
        return this;
    }
    public Object invalidInputException;
    public CreateProjectResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateProjectResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public CreateProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}