package openapisdk.models.operations;



public class CreateDeploymentResponse {
    public String contentType;
    public CreateDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDeploymentResult createDeploymentResult;
    public CreateDeploymentResponse withCreateDeploymentResult(openapisdk.models.shared.CreateDeploymentResult createDeploymentResult) {
        this.createDeploymentResult = createDeploymentResult;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateDeploymentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateDeploymentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}