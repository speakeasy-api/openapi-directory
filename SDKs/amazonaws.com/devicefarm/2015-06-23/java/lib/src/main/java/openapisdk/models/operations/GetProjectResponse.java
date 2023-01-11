package openapisdk.models.operations;



public class GetProjectResponse {
    public Object argumentException;
    public GetProjectResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public GetProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetProjectResult getProjectResult;
    public GetProjectResponse withGetProjectResult(openapisdk.models.shared.GetProjectResult getProjectResult) {
        this.getProjectResult = getProjectResult;
        return this;
    }
    public Object limitExceededException;
    public GetProjectResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public GetProjectResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public GetProjectResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public GetProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}