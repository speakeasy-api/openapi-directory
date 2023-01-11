package openapisdk.models.operations;



public class UpdateProjectResponse {
    public Object argumentException;
    public UpdateProjectResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public UpdateProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public UpdateProjectResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public UpdateProjectResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public UpdateProjectResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public UpdateProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateProjectResult updateProjectResult;
    public UpdateProjectResponse withUpdateProjectResult(openapisdk.models.shared.UpdateProjectResult updateProjectResult) {
        this.updateProjectResult = updateProjectResult;
        return this;
    }
}