package openapisdk.models.operations;



public class GetChannelCatalogExportationCacheInfoResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetChannelCatalogExportationCacheInfoResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetChannelCatalogExportationCacheInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChannelCatalogExportationCacheInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChannelCatalogExportCacheInfoResponse channelCatalogExportCacheInfoResponse;
    public GetChannelCatalogExportationCacheInfoResponse withChannelCatalogExportCacheInfoResponse(openapisdk.models.shared.ChannelCatalogExportCacheInfoResponse channelCatalogExportCacheInfoResponse) {
        this.channelCatalogExportCacheInfoResponse = channelCatalogExportCacheInfoResponse;
        return this;
    }
}