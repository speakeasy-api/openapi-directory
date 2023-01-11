package openapisdk.models.operations;



public class CreateConfigResponse {
    public openapisdk.models.shared.ConfigIdResponse configIdResponse;
    public CreateConfigResponse withConfigIdResponse(openapisdk.models.shared.ConfigIdResponse configIdResponse) {
        this.configIdResponse = configIdResponse;
        return this;
    }
    public String contentType;
    public CreateConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyException;
    public CreateConfigResponse withDependencyException(Object dependencyException) {
        this.dependencyException = dependencyException;
        return this;
    }
    public Object invalidParameterException;
    public CreateConfigResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceLimitExceededException;
    public CreateConfigResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}