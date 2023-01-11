package openapisdk.models.operations;



public class GetChannelCatalogProductInfoListResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetChannelCatalogProductInfoListResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetChannelCatalogProductInfoListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChannelCatalogProductInfoListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChannelCatalogProductInfoList channelCatalogProductInfoList;
    public GetChannelCatalogProductInfoListResponse withChannelCatalogProductInfoList(openapisdk.models.shared.ChannelCatalogProductInfoList channelCatalogProductInfoList) {
        this.channelCatalogProductInfoList = channelCatalogProductInfoList;
        return this;
    }
}