package openapisdk.models.operations;



public class ClearChannelCatalogExportationCacheResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public ClearChannelCatalogExportationCacheResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public ClearChannelCatalogExportationCacheResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClearChannelCatalogExportationCacheResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}