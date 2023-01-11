package openapisdk.models.operations;



public class CreateProjectResponse {
    public Object argumentException;
    public CreateProjectResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public CreateProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateProjectResult createProjectResult;
    public CreateProjectResponse withCreateProjectResult(openapisdk.models.shared.CreateProjectResult createProjectResult) {
        this.createProjectResult = createProjectResult;
        return this;
    }
    public Object limitExceededException;
    public CreateProjectResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public CreateProjectResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public CreateProjectResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public CreateProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagOperationException;
    public CreateProjectResponse withTagOperationException(Object tagOperationException) {
        this.tagOperationException = tagOperationException;
        return this;
    }
}