package openapisdk.models.operations;



public class CatalogStoreIndexResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public CatalogStoreIndexResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public CatalogStoreIndexResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CatalogStoreIndexResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CatalogStoreIndex catalogStoreIndex;
    public CatalogStoreIndexResponse withCatalogStoreIndex(openapisdk.models.shared.CatalogStoreIndex catalogStoreIndex) {
        this.catalogStoreIndex = catalogStoreIndex;
        return this;
    }
}