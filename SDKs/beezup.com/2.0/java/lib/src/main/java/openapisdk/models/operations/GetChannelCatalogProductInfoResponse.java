package openapisdk.models.operations;



public class GetChannelCatalogProductInfoResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetChannelCatalogProductInfoResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetChannelCatalogProductInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChannelCatalogProductInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChannelCatalogProductInfo channelCatalogProductInfo;
    public GetChannelCatalogProductInfoResponse withChannelCatalogProductInfo(openapisdk.models.shared.ChannelCatalogProductInfo channelCatalogProductInfo) {
        this.channelCatalogProductInfo = channelCatalogProductInfo;
        return this;
    }
}