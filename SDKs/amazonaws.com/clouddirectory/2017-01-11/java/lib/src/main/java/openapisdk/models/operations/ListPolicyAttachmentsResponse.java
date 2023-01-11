package openapisdk.models.operations;



public class ListPolicyAttachmentsResponse {
    public Object accessDeniedException;
    public ListPolicyAttachmentsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListPolicyAttachmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryNotEnabledException;
    public ListPolicyAttachmentsResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object internalServiceException;
    public ListPolicyAttachmentsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public ListPolicyAttachmentsResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListPolicyAttachmentsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object limitExceededException;
    public ListPolicyAttachmentsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListPolicyAttachmentsResponse listPolicyAttachmentsResponse;
    public ListPolicyAttachmentsResponse withListPolicyAttachmentsResponse(openapisdk.models.shared.ListPolicyAttachmentsResponse listPolicyAttachmentsResponse) {
        this.listPolicyAttachmentsResponse = listPolicyAttachmentsResponse;
        return this;
    }
    public Object notPolicyException;
    public ListPolicyAttachmentsResponse withNotPolicyException(Object notPolicyException) {
        this.notPolicyException = notPolicyException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListPolicyAttachmentsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public ListPolicyAttachmentsResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public ListPolicyAttachmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListPolicyAttachmentsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}