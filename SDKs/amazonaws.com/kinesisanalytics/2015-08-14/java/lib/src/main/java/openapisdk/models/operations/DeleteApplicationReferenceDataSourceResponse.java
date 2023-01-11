package openapisdk.models.operations;



public class DeleteApplicationReferenceDataSourceResponse {
    public Object concurrentModificationException;
    public DeleteApplicationReferenceDataSourceResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteApplicationReferenceDataSourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteApplicationReferenceDataSourceResponse;
    public DeleteApplicationReferenceDataSourceResponse withDeleteApplicationReferenceDataSourceResponse(java.util.Map<String, Object> deleteApplicationReferenceDataSourceResponse) {
        this.deleteApplicationReferenceDataSourceResponse = deleteApplicationReferenceDataSourceResponse;
        return this;
    }
    public Object invalidArgumentException;
    public DeleteApplicationReferenceDataSourceResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteApplicationReferenceDataSourceResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteApplicationReferenceDataSourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteApplicationReferenceDataSourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public DeleteApplicationReferenceDataSourceResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}