package openapisdk.models.operations;



public class ConfigureChannelCatalogColumnMappingsResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public ConfigureChannelCatalogColumnMappingsResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public ConfigureChannelCatalogColumnMappingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ConfigureChannelCatalogColumnMappingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}