package openapisdk.models.operations;



public class ListTableMetadataResponse {
    public String contentType;
    public ListTableMetadataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListTableMetadataResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public ListTableMetadataResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListTableMetadataOutput listTableMetadataOutput;
    public ListTableMetadataResponse withListTableMetadataOutput(openapisdk.models.shared.ListTableMetadataOutput listTableMetadataOutput) {
        this.listTableMetadataOutput = listTableMetadataOutput;
        return this;
    }
    public Object metadataException;
    public ListTableMetadataResponse withMetadataException(Object metadataException) {
        this.metadataException = metadataException;
        return this;
    }
    public Long statusCode;
    public ListTableMetadataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}