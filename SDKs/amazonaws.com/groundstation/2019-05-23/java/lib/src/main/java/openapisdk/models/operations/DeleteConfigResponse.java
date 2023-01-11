package openapisdk.models.operations;



public class DeleteConfigResponse {
    public openapisdk.models.shared.ConfigIdResponse configIdResponse;
    public DeleteConfigResponse withConfigIdResponse(openapisdk.models.shared.ConfigIdResponse configIdResponse) {
        this.configIdResponse = configIdResponse;
        return this;
    }
    public String contentType;
    public DeleteConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyException;
    public DeleteConfigResponse withDependencyException(Object dependencyException) {
        this.dependencyException = dependencyException;
        return this;
    }
    public Object invalidParameterException;
    public DeleteConfigResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}