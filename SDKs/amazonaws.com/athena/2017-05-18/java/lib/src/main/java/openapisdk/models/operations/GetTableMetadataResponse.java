package openapisdk.models.operations;



public class GetTableMetadataResponse {
    public String contentType;
    public GetTableMetadataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetTableMetadataOutput getTableMetadataOutput;
    public GetTableMetadataResponse withGetTableMetadataOutput(openapisdk.models.shared.GetTableMetadataOutput getTableMetadataOutput) {
        this.getTableMetadataOutput = getTableMetadataOutput;
        return this;
    }
    public Object internalServerException;
    public GetTableMetadataResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public GetTableMetadataResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object metadataException;
    public GetTableMetadataResponse withMetadataException(Object metadataException) {
        this.metadataException = metadataException;
        return this;
    }
    public Long statusCode;
    public GetTableMetadataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}