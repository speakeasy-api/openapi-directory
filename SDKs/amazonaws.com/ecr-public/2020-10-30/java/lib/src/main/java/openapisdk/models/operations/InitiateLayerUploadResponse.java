package openapisdk.models.operations;



public class InitiateLayerUploadResponse {
    public String contentType;
    public InitiateLayerUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InitiateLayerUploadResponse initiateLayerUploadResponse;
    public InitiateLayerUploadResponse withInitiateLayerUploadResponse(openapisdk.models.shared.InitiateLayerUploadResponse initiateLayerUploadResponse) {
        this.initiateLayerUploadResponse = initiateLayerUploadResponse;
        return this;
    }
    public Object invalidParameterException;
    public InitiateLayerUploadResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object registryNotFoundException;
    public InitiateLayerUploadResponse withRegistryNotFoundException(Object registryNotFoundException) {
        this.registryNotFoundException = registryNotFoundException;
        return this;
    }
    public Object repositoryNotFoundException;
    public InitiateLayerUploadResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object serverException;
    public InitiateLayerUploadResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public InitiateLayerUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedCommandException;
    public InitiateLayerUploadResponse withUnsupportedCommandException(Object unsupportedCommandException) {
        this.unsupportedCommandException = unsupportedCommandException;
        return this;
    }
}