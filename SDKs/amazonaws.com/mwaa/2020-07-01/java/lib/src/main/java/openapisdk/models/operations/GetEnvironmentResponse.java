package openapisdk.models.operations;



public class GetEnvironmentResponse {
    public String contentType;
    public GetEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEnvironmentOutput getEnvironmentOutput;
    public GetEnvironmentResponse withGetEnvironmentOutput(openapisdk.models.shared.GetEnvironmentOutput getEnvironmentOutput) {
        this.getEnvironmentOutput = getEnvironmentOutput;
        return this;
    }
    public Object internalServerException;
    public GetEnvironmentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetEnvironmentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetEnvironmentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}