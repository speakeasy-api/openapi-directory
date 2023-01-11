package openapisdk.models.operations;



public class UpdateUploadResponse {
    public Object argumentException;
    public UpdateUploadResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public UpdateUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public UpdateUploadResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public UpdateUploadResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public UpdateUploadResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public UpdateUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateUploadResult updateUploadResult;
    public UpdateUploadResponse withUpdateUploadResult(openapisdk.models.shared.UpdateUploadResult updateUploadResult) {
        this.updateUploadResult = updateUploadResult;
        return this;
    }
}