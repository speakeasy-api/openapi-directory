package openapisdk.models.operations;



public class CreateFhirDatastoreResponse {
    public Object accessDeniedException;
    public CreateFhirDatastoreResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateFhirDatastoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateFhirDatastoreResponse createFHIRDatastoreResponse;
    public CreateFhirDatastoreResponse withCreateFhirDatastoreResponse(openapisdk.models.shared.CreateFhirDatastoreResponse createFHIRDatastoreResponse) {
        this.createFHIRDatastoreResponse = createFHIRDatastoreResponse;
        return this;
    }
    public Object internalServerException;
    public CreateFhirDatastoreResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public CreateFhirDatastoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateFhirDatastoreResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateFhirDatastoreResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}