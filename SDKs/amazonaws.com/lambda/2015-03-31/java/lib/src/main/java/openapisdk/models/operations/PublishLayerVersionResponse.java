package openapisdk.models.operations;



public class PublishLayerVersionResponse {
    public Object codeStorageExceededException;
    public PublishLayerVersionResponse withCodeStorageExceededException(Object codeStorageExceededException) {
        this.codeStorageExceededException = codeStorageExceededException;
        return this;
    }
    public String contentType;
    public PublishLayerVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public PublishLayerVersionResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.PublishLayerVersionResponse publishLayerVersionResponse;
    public PublishLayerVersionResponse withPublishLayerVersionResponse(openapisdk.models.shared.PublishLayerVersionResponse publishLayerVersionResponse) {
        this.publishLayerVersionResponse = publishLayerVersionResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PublishLayerVersionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public PublishLayerVersionResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public PublishLayerVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public PublishLayerVersionResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}