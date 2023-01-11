package openapisdk.models.operations;



public class GetInstanceAccessDetailsResponse {
    public Object accessDeniedException;
    public GetInstanceAccessDetailsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public GetInstanceAccessDetailsResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public GetInstanceAccessDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetInstanceAccessDetailsResult getInstanceAccessDetailsResult;
    public GetInstanceAccessDetailsResponse withGetInstanceAccessDetailsResult(openapisdk.models.shared.GetInstanceAccessDetailsResult getInstanceAccessDetailsResult) {
        this.getInstanceAccessDetailsResult = getInstanceAccessDetailsResult;
        return this;
    }
    public Object invalidInputException;
    public GetInstanceAccessDetailsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetInstanceAccessDetailsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public GetInstanceAccessDetailsResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public GetInstanceAccessDetailsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetInstanceAccessDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetInstanceAccessDetailsResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}