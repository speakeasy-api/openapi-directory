package openapisdk.models.operations;



public class DeleteProjectResponse {
    public Object argumentException;
    public DeleteProjectResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public DeleteProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteProjectResult;
    public DeleteProjectResponse withDeleteProjectResult(java.util.Map<String, Object> deleteProjectResult) {
        this.deleteProjectResult = deleteProjectResult;
        return this;
    }
    public Object limitExceededException;
    public DeleteProjectResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public DeleteProjectResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public DeleteProjectResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public DeleteProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}