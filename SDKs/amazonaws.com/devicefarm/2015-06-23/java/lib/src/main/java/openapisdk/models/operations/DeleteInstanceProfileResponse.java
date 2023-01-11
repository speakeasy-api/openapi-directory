package openapisdk.models.operations;



public class DeleteInstanceProfileResponse {
    public Object argumentException;
    public DeleteInstanceProfileResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public DeleteInstanceProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteInstanceProfileResult;
    public DeleteInstanceProfileResponse withDeleteInstanceProfileResult(java.util.Map<String, Object> deleteInstanceProfileResult) {
        this.deleteInstanceProfileResult = deleteInstanceProfileResult;
        return this;
    }
    public Object limitExceededException;
    public DeleteInstanceProfileResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public DeleteInstanceProfileResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public DeleteInstanceProfileResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public DeleteInstanceProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}