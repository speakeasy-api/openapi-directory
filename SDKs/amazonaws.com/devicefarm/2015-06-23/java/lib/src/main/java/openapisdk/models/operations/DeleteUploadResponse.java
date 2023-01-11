package openapisdk.models.operations;



public class DeleteUploadResponse {
    public Object argumentException;
    public DeleteUploadResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public DeleteUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteUploadResult;
    public DeleteUploadResponse withDeleteUploadResult(java.util.Map<String, Object> deleteUploadResult) {
        this.deleteUploadResult = deleteUploadResult;
        return this;
    }
    public Object limitExceededException;
    public DeleteUploadResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public DeleteUploadResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public DeleteUploadResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public DeleteUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}