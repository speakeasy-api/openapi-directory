package openapisdk.models.operations;



public class CatalogGetCatalogColumnsResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public CatalogGetCatalogColumnsResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public CatalogGetCatalogColumnsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CatalogGetCatalogColumnsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CatalogColumnList catalogColumnList;
    public CatalogGetCatalogColumnsResponse withCatalogColumnList(openapisdk.models.shared.CatalogColumnList catalogColumnList) {
        this.catalogColumnList = catalogColumnList;
        return this;
    }
}