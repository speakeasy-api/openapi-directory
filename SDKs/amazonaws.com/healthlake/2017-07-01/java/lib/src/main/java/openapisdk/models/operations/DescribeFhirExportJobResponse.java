package openapisdk.models.operations;



public class DescribeFhirExportJobResponse {
    public String contentType;
    public DescribeFhirExportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeFhirExportJobResponse describeFHIRExportJobResponse;
    public DescribeFhirExportJobResponse withDescribeFhirExportJobResponse(openapisdk.models.shared.DescribeFhirExportJobResponse describeFHIRExportJobResponse) {
        this.describeFHIRExportJobResponse = describeFHIRExportJobResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeFhirExportJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeFhirExportJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeFhirExportJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeFhirExportJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeFhirExportJobResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}