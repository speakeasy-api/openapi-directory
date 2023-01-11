package openapisdk.models.operations;



public class CreateCloudFormationStackResponse {
    public Object accessDeniedException;
    public CreateCloudFormationStackResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public CreateCloudFormationStackResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public CreateCloudFormationStackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateCloudFormationStackResult createCloudFormationStackResult;
    public CreateCloudFormationStackResponse withCreateCloudFormationStackResult(openapisdk.models.shared.CreateCloudFormationStackResult createCloudFormationStackResult) {
        this.createCloudFormationStackResult = createCloudFormationStackResult;
        return this;
    }
    public Object invalidInputException;
    public CreateCloudFormationStackResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public CreateCloudFormationStackResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public CreateCloudFormationStackResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public CreateCloudFormationStackResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public CreateCloudFormationStackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public CreateCloudFormationStackResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}