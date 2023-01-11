package openapisdk.models.operations;



public class GetChannelCatalogProductByChannelCatalogResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetChannelCatalogProductByChannelCatalogResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetChannelCatalogProductByChannelCatalogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChannelCatalogProductByChannelCatalogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChannelCatalogProductByChannelCatalogResponse channelCatalogProductByChannelCatalogResponse;
    public GetChannelCatalogProductByChannelCatalogResponse withChannelCatalogProductByChannelCatalogResponse(openapisdk.models.shared.ChannelCatalogProductByChannelCatalogResponse channelCatalogProductByChannelCatalogResponse) {
        this.channelCatalogProductByChannelCatalogResponse = channelCatalogProductByChannelCatalogResponse;
        return this;
    }
}