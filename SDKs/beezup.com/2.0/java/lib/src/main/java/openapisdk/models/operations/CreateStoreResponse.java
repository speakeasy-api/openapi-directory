package openapisdk.models.operations;



public class CreateStoreResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public CreateStoreResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public CreateStoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateStoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseMessagePaymentRequired errorResponseMessagePaymentRequired;
    public CreateStoreResponse withErrorResponseMessagePaymentRequired(openapisdk.models.shared.ErrorResponseMessagePaymentRequired errorResponseMessagePaymentRequired) {
        this.errorResponseMessagePaymentRequired = errorResponseMessagePaymentRequired;
        return this;
    }
    public openapisdk.models.shared.LinksGetStoreLink linksGetStoreLink;
    public CreateStoreResponse withLinksGetStoreLink(openapisdk.models.shared.LinksGetStoreLink linksGetStoreLink) {
        this.linksGetStoreLink = linksGetStoreLink;
        return this;
    }
}