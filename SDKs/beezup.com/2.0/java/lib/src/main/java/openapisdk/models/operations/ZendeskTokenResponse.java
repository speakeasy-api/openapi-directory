package openapisdk.models.operations;



public class ZendeskTokenResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public ZendeskTokenResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public ZendeskTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ZendeskTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ZendeskToken zendeskToken;
    public ZendeskTokenResponse withZendeskToken(openapisdk.models.shared.ZendeskToken zendeskToken) {
        this.zendeskToken = zendeskToken;
        return this;
    }
}