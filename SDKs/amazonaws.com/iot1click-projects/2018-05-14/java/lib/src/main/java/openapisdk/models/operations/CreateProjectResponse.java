package openapisdk.models.operations;



public class CreateProjectResponse {
    public String contentType;
    public CreateProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createProjectResponse;
    public CreateProjectResponse withCreateProjectResponse(java.util.Map<String, Object> createProjectResponse) {
        this.createProjectResponse = createProjectResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateProjectResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CreateProjectResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceConflictException;
    public CreateProjectResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Long statusCode;
    public CreateProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}