package openapisdk.models.operations;



public class CreateEnvironmentResponse {
    public String contentType;
    public CreateEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateEnvironmentOutput createEnvironmentOutput;
    public CreateEnvironmentResponse withCreateEnvironmentOutput(openapisdk.models.shared.CreateEnvironmentOutput createEnvironmentOutput) {
        this.createEnvironmentOutput = createEnvironmentOutput;
        return this;
    }
    public Object internalServerException;
    public CreateEnvironmentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public CreateEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateEnvironmentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}