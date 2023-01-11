package openapisdk.models.operations;



public class CreateDataCatalogResponse {
    public String contentType;
    public CreateDataCatalogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createDataCatalogOutput;
    public CreateDataCatalogResponse withCreateDataCatalogOutput(java.util.Map<String, Object> createDataCatalogOutput) {
        this.createDataCatalogOutput = createDataCatalogOutput;
        return this;
    }
    public Object internalServerException;
    public CreateDataCatalogResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public CreateDataCatalogResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public CreateDataCatalogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}