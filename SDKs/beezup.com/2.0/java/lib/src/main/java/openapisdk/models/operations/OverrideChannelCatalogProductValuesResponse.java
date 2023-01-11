package openapisdk.models.operations;



public class OverrideChannelCatalogProductValuesResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public OverrideChannelCatalogProductValuesResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public OverrideChannelCatalogProductValuesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OverrideChannelCatalogProductValuesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}