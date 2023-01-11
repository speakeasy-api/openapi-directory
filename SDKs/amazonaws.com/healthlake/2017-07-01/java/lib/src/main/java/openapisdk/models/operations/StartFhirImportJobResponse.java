package openapisdk.models.operations;



public class StartFhirImportJobResponse {
    public Object accessDeniedException;
    public StartFhirImportJobResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public StartFhirImportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartFhirImportJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartFhirImportJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.StartFhirImportJobResponse startFHIRImportJobResponse;
    public StartFhirImportJobResponse withStartFhirImportJobResponse(openapisdk.models.shared.StartFhirImportJobResponse startFHIRImportJobResponse) {
        this.startFHIRImportJobResponse = startFHIRImportJobResponse;
        return this;
    }
    public Long statusCode;
    public StartFhirImportJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartFhirImportJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public StartFhirImportJobResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}