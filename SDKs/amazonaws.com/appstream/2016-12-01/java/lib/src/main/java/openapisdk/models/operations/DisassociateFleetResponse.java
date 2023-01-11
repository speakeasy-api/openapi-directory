package openapisdk.models.operations;



public class DisassociateFleetResponse {
    public Object concurrentModificationException;
    public DisassociateFleetResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DisassociateFleetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateFleetResult;
    public DisassociateFleetResponse withDisassociateFleetResult(java.util.Map<String, Object> disassociateFleetResult) {
        this.disassociateFleetResult = disassociateFleetResult;
        return this;
    }
    public Object operationNotPermittedException;
    public DisassociateFleetResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object resourceInUseException;
    public DisassociateFleetResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateFleetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateFleetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}