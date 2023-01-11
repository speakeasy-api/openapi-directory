package openapisdk.models.operations;



public class CatalogGetBeezUpColumnsResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public CatalogGetBeezUpColumnsResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public CatalogGetBeezUpColumnsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CatalogGetBeezUpColumnsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BeezUpColumnConfiguration[] beezUPColumnConfigurations;
    public CatalogGetBeezUpColumnsResponse withBeezUpColumnConfigurations(openapisdk.models.shared.BeezUpColumnConfiguration[] beezUPColumnConfigurations) {
        this.beezUPColumnConfigurations = beezUPColumnConfigurations;
        return this;
    }
}