package openapisdk.models.operations;



public class UpdateDataCatalogResponse {
    public String contentType;
    public UpdateDataCatalogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateDataCatalogResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateDataCatalogResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public UpdateDataCatalogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateDataCatalogOutput;
    public UpdateDataCatalogResponse withUpdateDataCatalogOutput(java.util.Map<String, Object> updateDataCatalogOutput) {
        this.updateDataCatalogOutput = updateDataCatalogOutput;
        return this;
    }
}