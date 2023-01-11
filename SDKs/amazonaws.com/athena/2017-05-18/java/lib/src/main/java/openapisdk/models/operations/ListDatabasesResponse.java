package openapisdk.models.operations;



public class ListDatabasesResponse {
    public String contentType;
    public ListDatabasesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListDatabasesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public ListDatabasesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListDatabasesOutput listDatabasesOutput;
    public ListDatabasesResponse withListDatabasesOutput(openapisdk.models.shared.ListDatabasesOutput listDatabasesOutput) {
        this.listDatabasesOutput = listDatabasesOutput;
        return this;
    }
    public Object metadataException;
    public ListDatabasesResponse withMetadataException(Object metadataException) {
        this.metadataException = metadataException;
        return this;
    }
    public Long statusCode;
    public ListDatabasesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}