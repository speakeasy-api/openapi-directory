package openapisdk.models.operations;



public class PutSchemaVersionMetadataResponse {
    public Object accessDeniedException;
    public PutSchemaVersionMetadataResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object alreadyExistsException;
    public PutSchemaVersionMetadataResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public String contentType;
    public PutSchemaVersionMetadataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public PutSchemaVersionMetadataResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object invalidInputException;
    public PutSchemaVersionMetadataResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.PutSchemaVersionMetadataResponse putSchemaVersionMetadataResponse;
    public PutSchemaVersionMetadataResponse withPutSchemaVersionMetadataResponse(openapisdk.models.shared.PutSchemaVersionMetadataResponse putSchemaVersionMetadataResponse) {
        this.putSchemaVersionMetadataResponse = putSchemaVersionMetadataResponse;
        return this;
    }
    public Object resourceNumberLimitExceededException;
    public PutSchemaVersionMetadataResponse withResourceNumberLimitExceededException(Object resourceNumberLimitExceededException) {
        this.resourceNumberLimitExceededException = resourceNumberLimitExceededException;
        return this;
    }
    public Long statusCode;
    public PutSchemaVersionMetadataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}