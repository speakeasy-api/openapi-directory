package openapisdk.models.operations;



public class DeleteProjectResponse {
    public Object concurrentModificationException;
    public DeleteProjectResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteProjectResult deleteProjectResult;
    public DeleteProjectResponse withDeleteProjectResult(openapisdk.models.shared.DeleteProjectResult deleteProjectResult) {
        this.deleteProjectResult = deleteProjectResult;
        return this;
    }
    public Object invalidServiceRoleException;
    public DeleteProjectResponse withInvalidServiceRoleException(Object invalidServiceRoleException) {
        this.invalidServiceRoleException = invalidServiceRoleException;
        return this;
    }
    public Long statusCode;
    public DeleteProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteProjectResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}