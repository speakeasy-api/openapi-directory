package openapisdk.models.operations;



public class ListFhirDatastoresResponse {
    public String contentType;
    public ListFhirDatastoresResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListFhirDatastoresResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListFhirDatastoresResponse listFHIRDatastoresResponse;
    public ListFhirDatastoresResponse withListFhirDatastoresResponse(openapisdk.models.shared.ListFhirDatastoresResponse listFHIRDatastoresResponse) {
        this.listFHIRDatastoresResponse = listFHIRDatastoresResponse;
        return this;
    }
    public Long statusCode;
    public ListFhirDatastoresResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListFhirDatastoresResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListFhirDatastoresResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}