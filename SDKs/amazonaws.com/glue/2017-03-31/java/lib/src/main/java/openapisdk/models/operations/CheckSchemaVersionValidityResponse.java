package openapisdk.models.operations;



public class CheckSchemaVersionValidityResponse {
    public Object accessDeniedException;
    public CheckSchemaVersionValidityResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.CheckSchemaVersionValidityResponse checkSchemaVersionValidityResponse;
    public CheckSchemaVersionValidityResponse withCheckSchemaVersionValidityResponse(openapisdk.models.shared.CheckSchemaVersionValidityResponse checkSchemaVersionValidityResponse) {
        this.checkSchemaVersionValidityResponse = checkSchemaVersionValidityResponse;
        return this;
    }
    public String contentType;
    public CheckSchemaVersionValidityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public CheckSchemaVersionValidityResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public CheckSchemaVersionValidityResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public CheckSchemaVersionValidityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}