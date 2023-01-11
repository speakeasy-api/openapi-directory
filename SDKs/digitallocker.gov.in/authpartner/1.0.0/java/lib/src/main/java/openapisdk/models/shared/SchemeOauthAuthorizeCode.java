package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeOauthAuthorizeCode {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeOauthAuthorizeCode withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}