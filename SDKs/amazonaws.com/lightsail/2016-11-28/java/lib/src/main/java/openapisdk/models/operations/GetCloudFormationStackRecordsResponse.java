package openapisdk.models.operations;



public class GetCloudFormationStackRecordsResponse {
    public Object accessDeniedException;
    public GetCloudFormationStackRecordsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public GetCloudFormationStackRecordsResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public GetCloudFormationStackRecordsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCloudFormationStackRecordsResult getCloudFormationStackRecordsResult;
    public GetCloudFormationStackRecordsResponse withGetCloudFormationStackRecordsResult(openapisdk.models.shared.GetCloudFormationStackRecordsResult getCloudFormationStackRecordsResult) {
        this.getCloudFormationStackRecordsResult = getCloudFormationStackRecordsResult;
        return this;
    }
    public Object invalidInputException;
    public GetCloudFormationStackRecordsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetCloudFormationStackRecordsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public GetCloudFormationStackRecordsResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public GetCloudFormationStackRecordsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetCloudFormationStackRecordsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetCloudFormationStackRecordsResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}