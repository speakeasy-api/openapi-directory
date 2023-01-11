package openapisdk.models.operations;



public class DeleteRegistryResponse {
    public Object accessDeniedException;
    public DeleteRegistryResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object concurrentModificationException;
    public DeleteRegistryResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteRegistryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteRegistryResponse deleteRegistryResponse;
    public DeleteRegistryResponse withDeleteRegistryResponse(openapisdk.models.shared.DeleteRegistryResponse deleteRegistryResponse) {
        this.deleteRegistryResponse = deleteRegistryResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DeleteRegistryResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object invalidInputException;
    public DeleteRegistryResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public DeleteRegistryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}