package openapisdk.models.operations;



public class PutImageResponse {
    public String contentType;
    public PutImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object imageAlreadyExistsException;
    public PutImageResponse withImageAlreadyExistsException(Object imageAlreadyExistsException) {
        this.imageAlreadyExistsException = imageAlreadyExistsException;
        return this;
    }
    public Object imageDigestDoesNotMatchException;
    public PutImageResponse withImageDigestDoesNotMatchException(Object imageDigestDoesNotMatchException) {
        this.imageDigestDoesNotMatchException = imageDigestDoesNotMatchException;
        return this;
    }
    public Object imageTagAlreadyExistsException;
    public PutImageResponse withImageTagAlreadyExistsException(Object imageTagAlreadyExistsException) {
        this.imageTagAlreadyExistsException = imageTagAlreadyExistsException;
        return this;
    }
    public Object invalidParameterException;
    public PutImageResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object kmsException;
    public PutImageResponse withKmsException(Object kmsException) {
        this.kmsException = kmsException;
        return this;
    }
    public Object layersNotFoundException;
    public PutImageResponse withLayersNotFoundException(Object layersNotFoundException) {
        this.layersNotFoundException = layersNotFoundException;
        return this;
    }
    public Object limitExceededException;
    public PutImageResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.PutImageResponse putImageResponse;
    public PutImageResponse withPutImageResponse(openapisdk.models.shared.PutImageResponse putImageResponse) {
        this.putImageResponse = putImageResponse;
        return this;
    }
    public Object referencedImagesNotFoundException;
    public PutImageResponse withReferencedImagesNotFoundException(Object referencedImagesNotFoundException) {
        this.referencedImagesNotFoundException = referencedImagesNotFoundException;
        return this;
    }
    public Object repositoryNotFoundException;
    public PutImageResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object serverException;
    public PutImageResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public PutImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}