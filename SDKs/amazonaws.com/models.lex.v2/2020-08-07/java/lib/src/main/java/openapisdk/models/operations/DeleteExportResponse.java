package openapisdk.models.operations;



public class DeleteExportResponse {
    public String contentType;
    public DeleteExportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteExportResponse deleteExportResponse;
    public DeleteExportResponse withDeleteExportResponse(openapisdk.models.shared.DeleteExportResponse deleteExportResponse) {
        this.deleteExportResponse = deleteExportResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteExportResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object preconditionFailedException;
    public DeleteExportResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DeleteExportResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DeleteExportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteExportResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteExportResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}