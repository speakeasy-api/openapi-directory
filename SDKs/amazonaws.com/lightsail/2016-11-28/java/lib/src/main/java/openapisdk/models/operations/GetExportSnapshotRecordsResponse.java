package openapisdk.models.operations;



public class GetExportSnapshotRecordsResponse {
    public Object accessDeniedException;
    public GetExportSnapshotRecordsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public GetExportSnapshotRecordsResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public GetExportSnapshotRecordsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetExportSnapshotRecordsResult getExportSnapshotRecordsResult;
    public GetExportSnapshotRecordsResponse withGetExportSnapshotRecordsResult(openapisdk.models.shared.GetExportSnapshotRecordsResult getExportSnapshotRecordsResult) {
        this.getExportSnapshotRecordsResult = getExportSnapshotRecordsResult;
        return this;
    }
    public Object invalidInputException;
    public GetExportSnapshotRecordsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetExportSnapshotRecordsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public GetExportSnapshotRecordsResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public GetExportSnapshotRecordsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetExportSnapshotRecordsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetExportSnapshotRecordsResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}