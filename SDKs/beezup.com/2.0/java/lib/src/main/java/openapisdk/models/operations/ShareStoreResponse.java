package openapisdk.models.operations;



public class ShareStoreResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public ShareStoreResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public ShareStoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ShareStoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseMessagePaymentRequired errorResponseMessagePaymentRequired;
    public ShareStoreResponse withErrorResponseMessagePaymentRequired(openapisdk.models.shared.ErrorResponseMessagePaymentRequired errorResponseMessagePaymentRequired) {
        this.errorResponseMessagePaymentRequired = errorResponseMessagePaymentRequired;
        return this;
    }
}