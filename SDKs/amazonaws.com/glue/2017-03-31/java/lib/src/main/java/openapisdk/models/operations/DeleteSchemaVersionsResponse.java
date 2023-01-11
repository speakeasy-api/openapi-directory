package openapisdk.models.operations;



public class DeleteSchemaVersionsResponse {
    public Object accessDeniedException;
    public DeleteSchemaVersionsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object concurrentModificationException;
    public DeleteSchemaVersionsResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteSchemaVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteSchemaVersionsResponse deleteSchemaVersionsResponse;
    public DeleteSchemaVersionsResponse withDeleteSchemaVersionsResponse(openapisdk.models.shared.DeleteSchemaVersionsResponse deleteSchemaVersionsResponse) {
        this.deleteSchemaVersionsResponse = deleteSchemaVersionsResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DeleteSchemaVersionsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object invalidInputException;
    public DeleteSchemaVersionsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public DeleteSchemaVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}