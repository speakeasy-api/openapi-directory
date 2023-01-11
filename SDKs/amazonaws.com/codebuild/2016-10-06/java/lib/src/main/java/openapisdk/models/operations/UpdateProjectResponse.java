package openapisdk.models.operations;



public class UpdateProjectResponse {
    public String contentType;
    public UpdateProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public UpdateProjectResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateProjectResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateProjectOutput updateProjectOutput;
    public UpdateProjectResponse withUpdateProjectOutput(openapisdk.models.shared.UpdateProjectOutput updateProjectOutput) {
        this.updateProjectOutput = updateProjectOutput;
        return this;
    }
}