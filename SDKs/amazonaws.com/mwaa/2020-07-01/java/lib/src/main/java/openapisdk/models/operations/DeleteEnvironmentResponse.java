package openapisdk.models.operations;



public class DeleteEnvironmentResponse {
    public String contentType;
    public DeleteEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteEnvironmentOutput;
    public DeleteEnvironmentResponse withDeleteEnvironmentOutput(java.util.Map<String, Object> deleteEnvironmentOutput) {
        this.deleteEnvironmentOutput = deleteEnvironmentOutput;
        return this;
    }
    public Object internalServerException;
    public DeleteEnvironmentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteEnvironmentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteEnvironmentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}