package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthOauthTokenRequestBody {
    @SpeakeasyMetadata("form:name=client_id")
    public String clientId;
    public PostAuthOauthTokenRequestBody withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("form:name=client_secret")
    public String clientSecret;
    public PostAuthOauthTokenRequestBody withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @SpeakeasyMetadata("form:name=grant_type")
    public String grantType;
    public PostAuthOauthTokenRequestBody withGrantType(String grantType) {
        this.grantType = grantType;
        return this;
    }
    @SpeakeasyMetadata("form:name=scope")
    public String scope;
    public PostAuthOauthTokenRequestBody withScope(String scope) {
        this.scope = scope;
        return this;
    }
}