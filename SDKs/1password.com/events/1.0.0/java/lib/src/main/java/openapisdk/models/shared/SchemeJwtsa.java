package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeJwtsa {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeJwtsa withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}