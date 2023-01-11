package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeOauth2AuthorizationCode {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeOauth2AuthorizationCode withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}