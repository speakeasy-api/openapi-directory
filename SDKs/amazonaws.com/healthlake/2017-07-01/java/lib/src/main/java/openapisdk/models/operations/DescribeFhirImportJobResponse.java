package openapisdk.models.operations;



public class DescribeFhirImportJobResponse {
    public String contentType;
    public DescribeFhirImportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeFhirImportJobResponse describeFHIRImportJobResponse;
    public DescribeFhirImportJobResponse withDescribeFhirImportJobResponse(openapisdk.models.shared.DescribeFhirImportJobResponse describeFHIRImportJobResponse) {
        this.describeFHIRImportJobResponse = describeFHIRImportJobResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeFhirImportJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeFhirImportJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeFhirImportJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeFhirImportJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeFhirImportJobResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}