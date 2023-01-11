package openapisdk.models.operations;



public class DeleteDomainEntryResponse {
    public Object accessDeniedException;
    public DeleteDomainEntryResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public DeleteDomainEntryResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public DeleteDomainEntryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteDomainEntryResult deleteDomainEntryResult;
    public DeleteDomainEntryResponse withDeleteDomainEntryResult(openapisdk.models.shared.DeleteDomainEntryResult deleteDomainEntryResult) {
        this.deleteDomainEntryResult = deleteDomainEntryResult;
        return this;
    }
    public Object invalidInputException;
    public DeleteDomainEntryResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public DeleteDomainEntryResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public DeleteDomainEntryResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public DeleteDomainEntryResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeleteDomainEntryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public DeleteDomainEntryResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}