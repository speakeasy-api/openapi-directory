package openapisdk.models.operations;



public class GetUploadResponse {
    public Object argumentException;
    public GetUploadResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public GetUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetUploadResult getUploadResult;
    public GetUploadResponse withGetUploadResult(openapisdk.models.shared.GetUploadResult getUploadResult) {
        this.getUploadResult = getUploadResult;
        return this;
    }
    public Object limitExceededException;
    public GetUploadResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public GetUploadResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public GetUploadResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public GetUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}