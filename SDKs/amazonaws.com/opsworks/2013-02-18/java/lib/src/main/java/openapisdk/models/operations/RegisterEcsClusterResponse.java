package openapisdk.models.operations;



public class RegisterEcsClusterResponse {
    public String contentType;
    public RegisterEcsClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RegisterEcsClusterResult registerEcsClusterResult;
    public RegisterEcsClusterResponse withRegisterEcsClusterResult(openapisdk.models.shared.RegisterEcsClusterResult registerEcsClusterResult) {
        this.registerEcsClusterResult = registerEcsClusterResult;
        return this;
    }
    public Object resourceNotFoundException;
    public RegisterEcsClusterResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public RegisterEcsClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public RegisterEcsClusterResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}