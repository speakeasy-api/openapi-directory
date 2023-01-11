package openapisdk.models.operations;



public class CreateUploadResponse {
    public Object argumentException;
    public CreateUploadResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public CreateUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateUploadResult createUploadResult;
    public CreateUploadResponse withCreateUploadResult(openapisdk.models.shared.CreateUploadResult createUploadResult) {
        this.createUploadResult = createUploadResult;
        return this;
    }
    public Object limitExceededException;
    public CreateUploadResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public CreateUploadResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public CreateUploadResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public CreateUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}