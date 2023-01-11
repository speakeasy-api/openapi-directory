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
    public Object kmsException;
    public InitiateLayerUploadResponse withKmsException(Object kmsException) {
        this.kmsException = kmsException;
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
}