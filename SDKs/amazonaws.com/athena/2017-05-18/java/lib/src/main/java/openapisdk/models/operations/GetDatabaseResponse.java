package openapisdk.models.operations;



public class GetDatabaseResponse {
    public String contentType;
    public GetDatabaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDatabaseOutput getDatabaseOutput;
    public GetDatabaseResponse withGetDatabaseOutput(openapisdk.models.shared.GetDatabaseOutput getDatabaseOutput) {
        this.getDatabaseOutput = getDatabaseOutput;
        return this;
    }
    public Object internalServerException;
    public GetDatabaseResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public GetDatabaseResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object metadataException;
    public GetDatabaseResponse withMetadataException(Object metadataException) {
        this.metadataException = metadataException;
        return this;
    }
    public Long statusCode;
    public GetDatabaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}