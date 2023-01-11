package openapisdk.models.operations;



public class AddFacetToObjectResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public AddFacetToObjectResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public java.util.Map<String, Object> addFacetToObjectResponse;
    public AddFacetToObjectResponse withAddFacetToObjectResponse(java.util.Map<String, Object> addFacetToObjectResponse) {
        this.addFacetToObjectResponse = addFacetToObjectResponse;
        return this;
    }
    public String contentType;
    public AddFacetToObjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DirectoryNotEnabledException directoryNotEnabledException;
    public AddFacetToObjectResponse withDirectoryNotEnabledException(openapisdk.models.shared.DirectoryNotEnabledException directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public openapisdk.models.shared.FacetValidationException facetValidationException;
    public AddFacetToObjectResponse withFacetValidationException(openapisdk.models.shared.FacetValidationException facetValidationException) {
        this.facetValidationException = facetValidationException;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public AddFacetToObjectResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public AddFacetToObjectResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public AddFacetToObjectResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public AddFacetToObjectResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public AddFacetToObjectResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public AddFacetToObjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public AddFacetToObjectResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}