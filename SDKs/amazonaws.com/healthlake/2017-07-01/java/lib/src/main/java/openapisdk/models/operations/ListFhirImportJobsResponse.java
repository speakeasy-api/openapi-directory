package openapisdk.models.operations;



public class ListFhirImportJobsResponse {
    public Object accessDeniedException;
    public ListFhirImportJobsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListFhirImportJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListFhirImportJobsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListFhirImportJobsResponse listFHIRImportJobsResponse;
    public ListFhirImportJobsResponse withListFhirImportJobsResponse(openapisdk.models.shared.ListFhirImportJobsResponse listFHIRImportJobsResponse) {
        this.listFHIRImportJobsResponse = listFHIRImportJobsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListFhirImportJobsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListFhirImportJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListFhirImportJobsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListFhirImportJobsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}