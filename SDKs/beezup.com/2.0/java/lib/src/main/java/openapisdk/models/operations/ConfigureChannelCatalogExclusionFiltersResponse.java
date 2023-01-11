package openapisdk.models.operations;



public class ConfigureChannelCatalogExclusionFiltersResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public ConfigureChannelCatalogExclusionFiltersResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public ConfigureChannelCatalogExclusionFiltersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ConfigureChannelCatalogExclusionFiltersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}