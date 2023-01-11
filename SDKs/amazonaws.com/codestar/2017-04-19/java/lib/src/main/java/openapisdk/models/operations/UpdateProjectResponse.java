package openapisdk.models.operations;



public class UpdateProjectResponse {
    public String contentType;
    public UpdateProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object projectNotFoundException;
    public UpdateProjectResponse withProjectNotFoundException(Object projectNotFoundException) {
        this.projectNotFoundException = projectNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateProjectResult;
    public UpdateProjectResponse withUpdateProjectResult(java.util.Map<String, Object> updateProjectResult) {
        this.updateProjectResult = updateProjectResult;
        return this;
    }
    public Object validationException;
    public UpdateProjectResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}