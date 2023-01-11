package openapisdk.models.operations;



public class CompleteLayerUploadResponse {
    public openapisdk.models.shared.CompleteLayerUploadResponse completeLayerUploadResponse;
    public CompleteLayerUploadResponse withCompleteLayerUploadResponse(openapisdk.models.shared.CompleteLayerUploadResponse completeLayerUploadResponse) {
        this.completeLayerUploadResponse = completeLayerUploadResponse;
        return this;
    }
    public String contentType;
    public CompleteLayerUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object emptyUploadException;
    public CompleteLayerUploadResponse withEmptyUploadException(Object emptyUploadException) {
        this.emptyUploadException = emptyUploadException;
        return this;
    }
    public Object invalidLayerException;
    public CompleteLayerUploadResponse withInvalidLayerException(Object invalidLayerException) {
        this.invalidLayerException = invalidLayerException;
        return this;
    }
    public Object invalidParameterException;
    public CompleteLayerUploadResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object layerAlreadyExistsException;
    public CompleteLayerUploadResponse withLayerAlreadyExistsException(Object layerAlreadyExistsException) {
        this.layerAlreadyExistsException = layerAlreadyExistsException;
        return this;
    }
    public Object layerPartTooSmallException;
    public CompleteLayerUploadResponse withLayerPartTooSmallException(Object layerPartTooSmallException) {
        this.layerPartTooSmallException = layerPartTooSmallException;
        return this;
    }
    public Object registryNotFoundException;
    public CompleteLayerUploadResponse withRegistryNotFoundException(Object registryNotFoundException) {
        this.registryNotFoundException = registryNotFoundException;
        return this;
    }
    public Object repositoryNotFoundException;
    public CompleteLayerUploadResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object serverException;
    public CompleteLayerUploadResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public CompleteLayerUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedCommandException;
    public CompleteLayerUploadResponse withUnsupportedCommandException(Object unsupportedCommandException) {
        this.unsupportedCommandException = unsupportedCommandException;
        return this;
    }
    public Object uploadNotFoundException;
    public CompleteLayerUploadResponse withUploadNotFoundException(Object uploadNotFoundException) {
        this.uploadNotFoundException = uploadNotFoundException;
        return this;
    }
}