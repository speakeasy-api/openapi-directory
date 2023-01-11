package openapisdk.models.operations;



public class UpdateProjectVisibilityResponse {
    public String contentType;
    public UpdateProjectVisibilityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public UpdateProjectVisibilityResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateProjectVisibilityResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateProjectVisibilityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateProjectVisibilityOutput updateProjectVisibilityOutput;
    public UpdateProjectVisibilityResponse withUpdateProjectVisibilityOutput(openapisdk.models.shared.UpdateProjectVisibilityOutput updateProjectVisibilityOutput) {
        this.updateProjectVisibilityOutput = updateProjectVisibilityOutput;
        return this;
    }
}