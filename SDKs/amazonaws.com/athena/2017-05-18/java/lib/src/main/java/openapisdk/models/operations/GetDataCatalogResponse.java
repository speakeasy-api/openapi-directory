package openapisdk.models.operations;



public class GetDataCatalogResponse {
    public String contentType;
    public GetDataCatalogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDataCatalogOutput getDataCatalogOutput;
    public GetDataCatalogResponse withGetDataCatalogOutput(openapisdk.models.shared.GetDataCatalogOutput getDataCatalogOutput) {
        this.getDataCatalogOutput = getDataCatalogOutput;
        return this;
    }
    public Object internalServerException;
    public GetDataCatalogResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public GetDataCatalogResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public GetDataCatalogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}