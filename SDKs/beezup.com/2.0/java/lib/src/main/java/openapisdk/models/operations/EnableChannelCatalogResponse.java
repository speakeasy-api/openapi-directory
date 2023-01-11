package openapisdk.models.operations;



public class EnableChannelCatalogResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public EnableChannelCatalogResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public EnableChannelCatalogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnableChannelCatalogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpgradeOfferRequired upgradeOfferRequired;
    public EnableChannelCatalogResponse withUpgradeOfferRequired(openapisdk.models.shared.UpgradeOfferRequired upgradeOfferRequired) {
        this.upgradeOfferRequired = upgradeOfferRequired;
        return this;
    }
}