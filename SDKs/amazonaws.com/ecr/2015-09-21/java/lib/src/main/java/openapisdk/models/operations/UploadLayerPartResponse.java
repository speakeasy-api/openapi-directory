package openapisdk.models.operations;



public class UploadLayerPartResponse {
    public String contentType;
    public UploadLayerPartResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidLayerPartException;
    public UploadLayerPartResponse withInvalidLayerPartException(Object invalidLayerPartException) {
        this.invalidLayerPartException = invalidLayerPartException;
        return this;
    }
    public Object invalidParameterException;
    public UploadLayerPartResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object kmsException;
    public UploadLayerPartResponse withKmsException(Object kmsException) {
        this.kmsException = kmsException;
        return this;
    }
    public Object limitExceededException;
    public UploadLayerPartResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object repositoryNotFoundException;
    public UploadLayerPartResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object serverException;
    public UploadLayerPartResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public UploadLayerPartResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UploadLayerPartResponse uploadLayerPartResponse;
    public UploadLayerPartResponse withUploadLayerPartResponse(openapisdk.models.shared.UploadLayerPartResponse uploadLayerPartResponse) {
        this.uploadLayerPartResponse = uploadLayerPartResponse;
        return this;
    }
    public Object uploadNotFoundException;
    public UploadLayerPartResponse withUploadNotFoundException(Object uploadNotFoundException) {
        this.uploadNotFoundException = uploadNotFoundException;
        return this;
    }
}