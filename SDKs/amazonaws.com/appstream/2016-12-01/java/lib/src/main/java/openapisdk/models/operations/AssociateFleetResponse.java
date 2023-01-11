package openapisdk.models.operations;



public class AssociateFleetResponse {
    public java.util.Map<String, Object> associateFleetResult;
    public AssociateFleetResponse withAssociateFleetResult(java.util.Map<String, Object> associateFleetResult) {
        this.associateFleetResult = associateFleetResult;
        return this;
    }
    public Object concurrentModificationException;
    public AssociateFleetResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public AssociateFleetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object incompatibleImageException;
    public AssociateFleetResponse withIncompatibleImageException(Object incompatibleImageException) {
        this.incompatibleImageException = incompatibleImageException;
        return this;
    }
    public Object invalidAccountStatusException;
    public AssociateFleetResponse withInvalidAccountStatusException(Object invalidAccountStatusException) {
        this.invalidAccountStatusException = invalidAccountStatusException;
        return this;
    }
    public Object limitExceededException;
    public AssociateFleetResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object operationNotPermittedException;
    public AssociateFleetResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateFleetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AssociateFleetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}