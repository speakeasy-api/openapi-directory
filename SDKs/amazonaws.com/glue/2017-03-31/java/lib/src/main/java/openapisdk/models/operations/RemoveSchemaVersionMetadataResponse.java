package openapisdk.models.operations;



public class RemoveSchemaVersionMetadataResponse {
    public Object accessDeniedException;
    public RemoveSchemaVersionMetadataResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public RemoveSchemaVersionMetadataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public RemoveSchemaVersionMetadataResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object invalidInputException;
    public RemoveSchemaVersionMetadataResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.RemoveSchemaVersionMetadataResponse removeSchemaVersionMetadataResponse;
    public RemoveSchemaVersionMetadataResponse withRemoveSchemaVersionMetadataResponse(openapisdk.models.shared.RemoveSchemaVersionMetadataResponse removeSchemaVersionMetadataResponse) {
        this.removeSchemaVersionMetadataResponse = removeSchemaVersionMetadataResponse;
        return this;
    }
    public Long statusCode;
    public RemoveSchemaVersionMetadataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}