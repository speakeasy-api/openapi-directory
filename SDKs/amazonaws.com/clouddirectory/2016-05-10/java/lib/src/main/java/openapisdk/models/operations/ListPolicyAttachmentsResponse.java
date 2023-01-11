package openapisdk.models.operations;



public class ListPolicyAttachmentsResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public ListPolicyAttachmentsResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListPolicyAttachmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DirectoryNotEnabledException directoryNotEnabledException;
    public ListPolicyAttachmentsResponse withDirectoryNotEnabledException(openapisdk.models.shared.DirectoryNotEnabledException directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public ListPolicyAttachmentsResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public ListPolicyAttachmentsResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.InvalidNextTokenException invalidNextTokenException;
    public ListPolicyAttachmentsResponse withInvalidNextTokenException(openapisdk.models.shared.InvalidNextTokenException invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public ListPolicyAttachmentsResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListPolicyAttachmentsResponse listPolicyAttachmentsResponse;
    public ListPolicyAttachmentsResponse withListPolicyAttachmentsResponse(openapisdk.models.shared.ListPolicyAttachmentsResponse listPolicyAttachmentsResponse) {
        this.listPolicyAttachmentsResponse = listPolicyAttachmentsResponse;
        return this;
    }
    public openapisdk.models.shared.NotPolicyException notPolicyException;
    public ListPolicyAttachmentsResponse withNotPolicyException(openapisdk.models.shared.NotPolicyException notPolicyException) {
        this.notPolicyException = notPolicyException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public ListPolicyAttachmentsResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public ListPolicyAttachmentsResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public ListPolicyAttachmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public ListPolicyAttachmentsResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}