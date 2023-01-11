package openapisdk.models.operations;



public class CreateProjectResponse {
    public Object concurrentModificationException;
    public CreateProjectResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
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
    public Object invalidServiceRoleException;
    public CreateProjectResponse withInvalidServiceRoleException(Object invalidServiceRoleException) {
        this.invalidServiceRoleException = invalidServiceRoleException;
        return this;
    }
    public Object limitExceededException;
    public CreateProjectResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object projectAlreadyExistsException;
    public CreateProjectResponse withProjectAlreadyExistsException(Object projectAlreadyExistsException) {
        this.projectAlreadyExistsException = projectAlreadyExistsException;
        return this;
    }
    public Object projectConfigurationException;
    public CreateProjectResponse withProjectConfigurationException(Object projectConfigurationException) {
        this.projectConfigurationException = projectConfigurationException;
        return this;
    }
    public Object projectCreationFailedException;
    public CreateProjectResponse withProjectCreationFailedException(Object projectCreationFailedException) {
        this.projectCreationFailedException = projectCreationFailedException;
        return this;
    }
    public Long statusCode;
    public CreateProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateProjectResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}