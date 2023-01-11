package openapisdk.models.operations;



public class DeleteNetworkProfileResponse {
    public Object argumentException;
    public DeleteNetworkProfileResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public DeleteNetworkProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteNetworkProfileResult;
    public DeleteNetworkProfileResponse withDeleteNetworkProfileResult(java.util.Map<String, Object> deleteNetworkProfileResult) {
        this.deleteNetworkProfileResult = deleteNetworkProfileResult;
        return this;
    }
    public Object limitExceededException;
    public DeleteNetworkProfileResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public DeleteNetworkProfileResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public DeleteNetworkProfileResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public DeleteNetworkProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}