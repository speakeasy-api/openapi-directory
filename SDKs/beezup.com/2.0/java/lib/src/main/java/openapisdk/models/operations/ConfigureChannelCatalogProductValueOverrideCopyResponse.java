package openapisdk.models.operations;



public class ConfigureChannelCatalogProductValueOverrideCopyResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public ConfigureChannelCatalogProductValueOverrideCopyResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public ConfigureChannelCatalogProductValueOverrideCopyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ConfigureChannelCatalogProductValueOverrideCopyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}