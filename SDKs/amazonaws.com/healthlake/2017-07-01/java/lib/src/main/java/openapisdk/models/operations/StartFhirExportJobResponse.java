package openapisdk.models.operations;



public class StartFhirExportJobResponse {
    public Object accessDeniedException;
    public StartFhirExportJobResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public StartFhirExportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartFhirExportJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartFhirExportJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.StartFhirExportJobResponse startFHIRExportJobResponse;
    public StartFhirExportJobResponse withStartFhirExportJobResponse(openapisdk.models.shared.StartFhirExportJobResponse startFHIRExportJobResponse) {
        this.startFHIRExportJobResponse = startFHIRExportJobResponse;
        return this;
    }
    public Long statusCode;
    public StartFhirExportJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartFhirExportJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public StartFhirExportJobResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}