package openapisdk.models.operations;



public class GetChannelCatalogProductValueOverrideCopyResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetChannelCatalogProductValueOverrideCopyResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetChannelCatalogProductValueOverrideCopyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChannelCatalogProductValueOverrideCopyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}