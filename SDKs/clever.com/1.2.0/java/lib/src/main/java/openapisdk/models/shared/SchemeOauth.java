package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeOauth {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeOauth withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}