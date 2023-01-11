package openapisdk.models.operations;



public class UpgradePublishedSchemaResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public UpgradePublishedSchemaResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpgradePublishedSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IncompatibleSchemaException incompatibleSchemaException;
    public UpgradePublishedSchemaResponse withIncompatibleSchemaException(openapisdk.models.shared.IncompatibleSchemaException incompatibleSchemaException) {
        this.incompatibleSchemaException = incompatibleSchemaException;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public UpgradePublishedSchemaResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public UpgradePublishedSchemaResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.InvalidAttachmentException invalidAttachmentException;
    public UpgradePublishedSchemaResponse withInvalidAttachmentException(openapisdk.models.shared.InvalidAttachmentException invalidAttachmentException) {
        this.invalidAttachmentException = invalidAttachmentException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public UpgradePublishedSchemaResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public UpgradePublishedSchemaResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public UpgradePublishedSchemaResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public UpgradePublishedSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpgradePublishedSchemaResponse upgradePublishedSchemaResponse;
    public UpgradePublishedSchemaResponse withUpgradePublishedSchemaResponse(openapisdk.models.shared.UpgradePublishedSchemaResponse upgradePublishedSchemaResponse) {
        this.upgradePublishedSchemaResponse = upgradePublishedSchemaResponse;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public UpgradePublishedSchemaResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}