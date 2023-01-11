package openapisdk.models.operations;



public class GetConfigResponse {
    public String contentType;
    public GetConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyException;
    public GetConfigResponse withDependencyException(Object dependencyException) {
        this.dependencyException = dependencyException;
        return this;
    }
    public openapisdk.models.shared.GetConfigResponse getConfigResponse;
    public GetConfigResponse withGetConfigResponse(openapisdk.models.shared.GetConfigResponse getConfigResponse) {
        this.getConfigResponse = getConfigResponse;
        return this;
    }
    public Object invalidParameterException;
    public GetConfigResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}