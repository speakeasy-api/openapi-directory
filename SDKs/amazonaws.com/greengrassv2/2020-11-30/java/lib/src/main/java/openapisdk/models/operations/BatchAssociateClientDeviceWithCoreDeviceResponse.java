package openapisdk.models.operations;



public class BatchAssociateClientDeviceWithCoreDeviceResponse {
    public Object accessDeniedException;
    public BatchAssociateClientDeviceWithCoreDeviceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.BatchAssociateClientDeviceWithCoreDeviceResponse batchAssociateClientDeviceWithCoreDeviceResponse;
    public BatchAssociateClientDeviceWithCoreDeviceResponse withBatchAssociateClientDeviceWithCoreDeviceResponse(openapisdk.models.shared.BatchAssociateClientDeviceWithCoreDeviceResponse batchAssociateClientDeviceWithCoreDeviceResponse) {
        this.batchAssociateClientDeviceWithCoreDeviceResponse = batchAssociateClientDeviceWithCoreDeviceResponse;
        return this;
    }
    public String contentType;
    public BatchAssociateClientDeviceWithCoreDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchAssociateClientDeviceWithCoreDeviceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public BatchAssociateClientDeviceWithCoreDeviceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public BatchAssociateClientDeviceWithCoreDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchAssociateClientDeviceWithCoreDeviceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public BatchAssociateClientDeviceWithCoreDeviceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}