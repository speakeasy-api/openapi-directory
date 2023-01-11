package openapisdk.models.operations;



public class DeleteChannelCatalogProductValueOverrideResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public DeleteChannelCatalogProductValueOverrideResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public DeleteChannelCatalogProductValueOverrideResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteChannelCatalogProductValueOverrideResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}