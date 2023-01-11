package openapisdk.models.operations;



public class GetLegacyTrackingChannelCatalogResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetLegacyTrackingChannelCatalogResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetLegacyTrackingChannelCatalogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLegacyTrackingChannelCatalogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyTrackingChannelCatalog legacyTrackingChannelCatalog;
    public GetLegacyTrackingChannelCatalogResponse withLegacyTrackingChannelCatalog(openapisdk.models.shared.LegacyTrackingChannelCatalog legacyTrackingChannelCatalog) {
        this.legacyTrackingChannelCatalog = legacyTrackingChannelCatalog;
        return this;
    }
}