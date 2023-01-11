package openapisdk.models.operations;



public class DescribeFhirDatastoreResponse {
    public String contentType;
    public DescribeFhirDatastoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeFhirDatastoreResponse describeFHIRDatastoreResponse;
    public DescribeFhirDatastoreResponse withDescribeFhirDatastoreResponse(openapisdk.models.shared.DescribeFhirDatastoreResponse describeFHIRDatastoreResponse) {
        this.describeFHIRDatastoreResponse = describeFHIRDatastoreResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeFhirDatastoreResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeFhirDatastoreResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeFhirDatastoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeFhirDatastoreResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeFhirDatastoreResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}