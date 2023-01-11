package openapisdk.models.operations;



public class CreateInstancesFromSnapshotResponse {
    public Object accessDeniedException;
    public CreateInstancesFromSnapshotResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public CreateInstancesFromSnapshotResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public CreateInstancesFromSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateInstancesFromSnapshotResult createInstancesFromSnapshotResult;
    public CreateInstancesFromSnapshotResponse withCreateInstancesFromSnapshotResult(openapisdk.models.shared.CreateInstancesFromSnapshotResult createInstancesFromSnapshotResult) {
        this.createInstancesFromSnapshotResult = createInstancesFromSnapshotResult;
        return this;
    }
    public Object invalidInputException;
    public CreateInstancesFromSnapshotResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public CreateInstancesFromSnapshotResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public CreateInstancesFromSnapshotResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public CreateInstancesFromSnapshotResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public CreateInstancesFromSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public CreateInstancesFromSnapshotResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}