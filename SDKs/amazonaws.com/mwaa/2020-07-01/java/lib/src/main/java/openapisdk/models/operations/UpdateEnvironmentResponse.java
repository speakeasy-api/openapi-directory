package openapisdk.models.operations;



public class UpdateEnvironmentResponse {
    public String contentType;
    public UpdateEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateEnvironmentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateEnvironmentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateEnvironmentOutput updateEnvironmentOutput;
    public UpdateEnvironmentResponse withUpdateEnvironmentOutput(openapisdk.models.shared.UpdateEnvironmentOutput updateEnvironmentOutput) {
        this.updateEnvironmentOutput = updateEnvironmentOutput;
        return this;
    }
    public Object validationException;
    public UpdateEnvironmentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}