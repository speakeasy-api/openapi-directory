package openapisdk.models.operations;



public class UpgradeAppliedSchemaResponse {
    public Object accessDeniedException;
    public UpgradeAppliedSchemaResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpgradeAppliedSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object incompatibleSchemaException;
    public UpgradeAppliedSchemaResponse withIncompatibleSchemaException(Object incompatibleSchemaException) {
        this.incompatibleSchemaException = incompatibleSchemaException;
        return this;
    }
    public Object internalServiceException;
    public UpgradeAppliedSchemaResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public UpgradeAppliedSchemaResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidAttachmentException;
    public UpgradeAppliedSchemaResponse withInvalidAttachmentException(Object invalidAttachmentException) {
        this.invalidAttachmentException = invalidAttachmentException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpgradeAppliedSchemaResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public UpgradeAppliedSchemaResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Object schemaAlreadyExistsException;
    public UpgradeAppliedSchemaResponse withSchemaAlreadyExistsException(Object schemaAlreadyExistsException) {
        this.schemaAlreadyExistsException = schemaAlreadyExistsException;
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
    public Object validationException;
    public UpgradeAppliedSchemaResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}