package openapisdk.models.operations;



public class GetLegacyTrackingChannelCatalogsResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetLegacyTrackingChannelCatalogsResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetLegacyTrackingChannelCatalogsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLegacyTrackingChannelCatalogsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyTrackingChannelCatalogList legacyTrackingChannelCatalogList;
    public GetLegacyTrackingChannelCatalogsResponse withLegacyTrackingChannelCatalogList(openapisdk.models.shared.LegacyTrackingChannelCatalogList legacyTrackingChannelCatalogList) {
        this.legacyTrackingChannelCatalogList = legacyTrackingChannelCatalogList;
        return this;
    }
}