package openapisdk.models.operations;



public class GetChannelCatalogProductsCountersResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetChannelCatalogProductsCountersResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetChannelCatalogProductsCountersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChannelCatalogProductsCountersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChannelCatalogProductsCounters channelCatalogProductsCounters;
    public GetChannelCatalogProductsCountersResponse withChannelCatalogProductsCounters(openapisdk.models.shared.ChannelCatalogProductsCounters channelCatalogProductsCounters) {
        this.channelCatalogProductsCounters = channelCatalogProductsCounters;
        return this;
    }
}