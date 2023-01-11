package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemePersonalAccessToken {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemePersonalAccessToken withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}