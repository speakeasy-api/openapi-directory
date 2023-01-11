package openapisdk.models.operations;



public class UpgradeAppliedSchemaResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public UpgradeAppliedSchemaResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpgradeAppliedSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IncompatibleSchemaException incompatibleSchemaException;
    public UpgradeAppliedSchemaResponse withIncompatibleSchemaException(openapisdk.models.shared.IncompatibleSchemaException incompatibleSchemaException) {
        this.incompatibleSchemaException = incompatibleSchemaException;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public UpgradeAppliedSchemaResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public UpgradeAppliedSchemaResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.InvalidAttachmentException invalidAttachmentException;
    public UpgradeAppliedSchemaResponse withInvalidAttachmentException(openapisdk.models.shared.InvalidAttachmentException invalidAttachmentException) {
        this.invalidAttachmentException = invalidAttachmentException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public UpgradeAppliedSchemaResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public UpgradeAppliedSchemaResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public UpgradeAppliedSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpgradeAppliedSchemaResponse upgradeAppliedSchemaResponse;
    public UpgradeAppliedSchemaResponse withUpgradeAppliedSchemaResponse(openapisdk.models.shared.UpgradeAppliedSchemaResponse upgradeAppliedSchemaResponse) {
        this.upgradeAppliedSchemaResponse = upgradeAppliedSchemaResponse;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public UpgradeAppliedSchemaResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}