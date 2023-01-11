package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeUserAccessToken {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeUserAccessToken withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}