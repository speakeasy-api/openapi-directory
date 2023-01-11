package openapisdk.models.operations;



public class IsVpcPeeredResponse {
    public Object accessDeniedException;
    public IsVpcPeeredResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public IsVpcPeeredResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public IsVpcPeeredResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public IsVpcPeeredResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.IsVpcPeeredResult isVpcPeeredResult;
    public IsVpcPeeredResponse withIsVpcPeeredResult(openapisdk.models.shared.IsVpcPeeredResult isVpcPeeredResult) {
        this.isVpcPeeredResult = isVpcPeeredResult;
        return this;
    }
    public Object notFoundException;
    public IsVpcPeeredResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public IsVpcPeeredResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public IsVpcPeeredResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public IsVpcPeeredResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public IsVpcPeeredResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}