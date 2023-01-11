package openapisdk.models.operations;



public class MigrateLegacyTrackingChannelCatalogResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public MigrateLegacyTrackingChannelCatalogResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public MigrateLegacyTrackingChannelCatalogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MigrateLegacyTrackingChannelCatalogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}