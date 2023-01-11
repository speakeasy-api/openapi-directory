package openapisdk.models.operations;



public class ListFhirExportJobsResponse {
    public Object accessDeniedException;
    public ListFhirExportJobsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListFhirExportJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListFhirExportJobsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListFhirExportJobsResponse listFHIRExportJobsResponse;
    public ListFhirExportJobsResponse withListFhirExportJobsResponse(openapisdk.models.shared.ListFhirExportJobsResponse listFHIRExportJobsResponse) {
        this.listFHIRExportJobsResponse = listFHIRExportJobsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListFhirExportJobsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListFhirExportJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListFhirExportJobsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListFhirExportJobsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}