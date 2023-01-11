package openapisdk.models.operations;



public class DeleteSchemaResponse {
    public Object accessDeniedException;
    public DeleteSchemaResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object concurrentModificationException;
    public DeleteSchemaResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteSchemaResponse deleteSchemaResponse;
    public DeleteSchemaResponse withDeleteSchemaResponse(openapisdk.models.shared.DeleteSchemaResponse deleteSchemaResponse) {
        this.deleteSchemaResponse = deleteSchemaResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DeleteSchemaResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object invalidInputException;
    public DeleteSchemaResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public DeleteSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}