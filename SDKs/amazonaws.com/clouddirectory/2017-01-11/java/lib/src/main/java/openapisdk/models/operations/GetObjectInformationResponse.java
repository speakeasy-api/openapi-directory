package openapisdk.models.operations;



public class GetObjectInformationResponse {
    public Object accessDeniedException;
    public GetObjectInformationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetObjectInformationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryNotEnabledException;
    public GetObjectInformationResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public openapisdk.models.shared.GetObjectInformationResponse getObjectInformationResponse;
    public GetObjectInformationResponse withGetObjectInformationResponse(openapisdk.models.shared.GetObjectInformationResponse getObjectInformationResponse) {
        this.getObjectInformationResponse = getObjectInformationResponse;
        return this;
    }
    public Object internalServiceException;
    public GetObjectInformationResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public GetObjectInformationResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public GetObjectInformationResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetObjectInformationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public GetObjectInformationResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public GetObjectInformationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetObjectInformationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}