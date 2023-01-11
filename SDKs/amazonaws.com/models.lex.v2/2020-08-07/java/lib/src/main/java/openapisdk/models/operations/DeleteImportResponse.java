package openapisdk.models.operations;



public class DeleteImportResponse {
    public String contentType;
    public DeleteImportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteImportResponse deleteImportResponse;
    public DeleteImportResponse withDeleteImportResponse(openapisdk.models.shared.DeleteImportResponse deleteImportResponse) {
        this.deleteImportResponse = deleteImportResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteImportResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object preconditionFailedException;
    public DeleteImportResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DeleteImportResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DeleteImportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteImportResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteImportResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}