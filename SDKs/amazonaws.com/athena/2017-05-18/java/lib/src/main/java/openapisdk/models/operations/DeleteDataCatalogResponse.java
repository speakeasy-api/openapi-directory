package openapisdk.models.operations;



public class DeleteDataCatalogResponse {
    public String contentType;
    public DeleteDataCatalogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteDataCatalogOutput;
    public DeleteDataCatalogResponse withDeleteDataCatalogOutput(java.util.Map<String, Object> deleteDataCatalogOutput) {
        this.deleteDataCatalogOutput = deleteDataCatalogOutput;
        return this;
    }
    public Object internalServerException;
    public DeleteDataCatalogResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteDataCatalogResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DeleteDataCatalogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}