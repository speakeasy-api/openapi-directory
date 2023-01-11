package openapisdk.models.operations;



public class UpdateConfigResponse {
    public openapisdk.models.shared.ConfigIdResponse configIdResponse;
    public UpdateConfigResponse withConfigIdResponse(openapisdk.models.shared.ConfigIdResponse configIdResponse) {
        this.configIdResponse = configIdResponse;
        return this;
    }
    public String contentType;
    public UpdateConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyException;
    public UpdateConfigResponse withDependencyException(Object dependencyException) {
        this.dependencyException = dependencyException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateConfigResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}