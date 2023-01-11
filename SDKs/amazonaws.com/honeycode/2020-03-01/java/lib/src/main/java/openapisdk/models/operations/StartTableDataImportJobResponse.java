package openapisdk.models.operations;



public class StartTableDataImportJobResponse {
    public Object accessDeniedException;
    public StartTableDataImportJobResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public StartTableDataImportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartTableDataImportJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartTableDataImportJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public StartTableDataImportJobResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public openapisdk.models.shared.StartTableDataImportJobResult startTableDataImportJobResult;
    public StartTableDataImportJobResponse withStartTableDataImportJobResult(openapisdk.models.shared.StartTableDataImportJobResult startTableDataImportJobResult) {
        this.startTableDataImportJobResult = startTableDataImportJobResult;
        return this;
    }
    public Long statusCode;
    public StartTableDataImportJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartTableDataImportJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public StartTableDataImportJobResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}