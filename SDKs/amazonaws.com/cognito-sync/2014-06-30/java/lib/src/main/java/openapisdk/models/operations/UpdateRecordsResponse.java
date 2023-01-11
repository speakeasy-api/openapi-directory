package openapisdk.models.operations;



public class UpdateRecordsResponse {
    public String contentType;
    public UpdateRecordsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public UpdateRecordsResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidLambdaFunctionOutputException;
    public UpdateRecordsResponse withInvalidLambdaFunctionOutputException(Object invalidLambdaFunctionOutputException) {
        this.invalidLambdaFunctionOutputException = invalidLambdaFunctionOutputException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateRecordsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object lambdaThrottledException;
    public UpdateRecordsResponse withLambdaThrottledException(Object lambdaThrottledException) {
        this.lambdaThrottledException = lambdaThrottledException;
        return this;
    }
    public Object limitExceededException;
    public UpdateRecordsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notAuthorizedException;
    public UpdateRecordsResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceConflictException;
    public UpdateRecordsResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateRecordsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateRecordsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateRecordsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateRecordsResponse updateRecordsResponse;
    public UpdateRecordsResponse withUpdateRecordsResponse(openapisdk.models.shared.UpdateRecordsResponse updateRecordsResponse) {
        this.updateRecordsResponse = updateRecordsResponse;
        return this;
    }
}