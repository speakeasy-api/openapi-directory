package openapisdk.models.operations;



public class PostOauthAccessTokenResponse {
    public PostOauthAccessTokenAccessTokenResponseV2 accessTokenResponseV2;
    public PostOauthAccessTokenResponse withAccessTokenResponseV2(PostOauthAccessTokenAccessTokenResponseV2 accessTokenResponseV2) {
        this.accessTokenResponseV2 = accessTokenResponseV2;
        return this;
    }
    public String contentType;
    public PostOauthAccessTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostOauthAccessTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OneordersGetResponses404ContentApplication1jsonSchema oneordersGetResponses404ContentApplication1jsonSchema;
    public PostOauthAccessTokenResponse withOneordersGetResponses404ContentApplication1jsonSchema(openapisdk.models.shared.OneordersGetResponses404ContentApplication1jsonSchema oneordersGetResponses404ContentApplication1jsonSchema) {
        this.oneordersGetResponses404ContentApplication1jsonSchema = oneordersGetResponses404ContentApplication1jsonSchema;
        return this;
    }
}