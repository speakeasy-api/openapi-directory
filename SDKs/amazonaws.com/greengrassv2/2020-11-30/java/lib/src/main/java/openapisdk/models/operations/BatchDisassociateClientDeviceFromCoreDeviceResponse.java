package openapisdk.models.operations;



public class BatchDisassociateClientDeviceFromCoreDeviceResponse {
    public Object accessDeniedException;
    public BatchDisassociateClientDeviceFromCoreDeviceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.BatchDisassociateClientDeviceFromCoreDeviceResponse batchDisassociateClientDeviceFromCoreDeviceResponse;
    public BatchDisassociateClientDeviceFromCoreDeviceResponse withBatchDisassociateClientDeviceFromCoreDeviceResponse(openapisdk.models.shared.BatchDisassociateClientDeviceFromCoreDeviceResponse batchDisassociateClientDeviceFromCoreDeviceResponse) {
        this.batchDisassociateClientDeviceFromCoreDeviceResponse = batchDisassociateClientDeviceFromCoreDeviceResponse;
        return this;
    }
    public String contentType;
    public BatchDisassociateClientDeviceFromCoreDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchDisassociateClientDeviceFromCoreDeviceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public BatchDisassociateClientDeviceFromCoreDeviceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public BatchDisassociateClientDeviceFromCoreDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchDisassociateClientDeviceFromCoreDeviceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public BatchDisassociateClientDeviceFromCoreDeviceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}