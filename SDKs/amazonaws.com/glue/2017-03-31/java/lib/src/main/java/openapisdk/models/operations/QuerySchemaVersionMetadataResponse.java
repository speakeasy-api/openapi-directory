package openapisdk.models.operations;



public class QuerySchemaVersionMetadataResponse {
    public Object accessDeniedException;
    public QuerySchemaVersionMetadataResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public QuerySchemaVersionMetadataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public QuerySchemaVersionMetadataResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object invalidInputException;
    public QuerySchemaVersionMetadataResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.QuerySchemaVersionMetadataResponse querySchemaVersionMetadataResponse;
    public QuerySchemaVersionMetadataResponse withQuerySchemaVersionMetadataResponse(openapisdk.models.shared.QuerySchemaVersionMetadataResponse querySchemaVersionMetadataResponse) {
        this.querySchemaVersionMetadataResponse = querySchemaVersionMetadataResponse;
        return this;
    }
    public Long statusCode;
    public QuerySchemaVersionMetadataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}