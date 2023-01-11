package openapisdk.models.operations;



public class DeleteFhirDatastoreResponse {
    public Object accessDeniedException;
    public DeleteFhirDatastoreResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteFhirDatastoreResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteFhirDatastoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteFhirDatastoreResponse deleteFHIRDatastoreResponse;
    public DeleteFhirDatastoreResponse withDeleteFhirDatastoreResponse(openapisdk.models.shared.DeleteFhirDatastoreResponse deleteFHIRDatastoreResponse) {
        this.deleteFHIRDatastoreResponse = deleteFHIRDatastoreResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteFhirDatastoreResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteFhirDatastoreResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteFhirDatastoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteFhirDatastoreResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteFhirDatastoreResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}