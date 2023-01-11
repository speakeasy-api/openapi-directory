package openapisdk.models.operations;



public class GetChannelCatalogCategoriesResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetChannelCatalogCategoriesResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetChannelCatalogCategoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChannelCatalogCategoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChannelCatalogCategoryConfigurationList channelCatalogCategoryConfigurationList;
    public GetChannelCatalogCategoriesResponse withChannelCatalogCategoryConfigurationList(openapisdk.models.shared.ChannelCatalogCategoryConfigurationList channelCatalogCategoryConfigurationList) {
        this.channelCatalogCategoryConfigurationList = channelCatalogCategoryConfigurationList;
        return this;
    }
}