package openapisdk.models.operations;



public class UpgradePublishedSchemaResponse {
    public Object accessDeniedException;
    public UpgradePublishedSchemaResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpgradePublishedSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object incompatibleSchemaException;
    public UpgradePublishedSchemaResponse withIncompatibleSchemaException(Object incompatibleSchemaException) {
        this.incompatibleSchemaException = incompatibleSchemaException;
        return this;
    }
    public Object internalServiceException;
    public UpgradePublishedSchemaResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public UpgradePublishedSchemaResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidAttachmentException;
    public UpgradePublishedSchemaResponse withInvalidAttachmentException(Object invalidAttachmentException) {
        this.invalidAttachmentException = invalidAttachmentException;
        return this;
    }
    public Object limitExceededException;
    public UpgradePublishedSchemaResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpgradePublishedSchemaResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public UpgradePublishedSchemaResponse withRetryableConflictException(Object retryableConflictException) {
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
    public Object validationException;
    public UpgradePublishedSchemaResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}