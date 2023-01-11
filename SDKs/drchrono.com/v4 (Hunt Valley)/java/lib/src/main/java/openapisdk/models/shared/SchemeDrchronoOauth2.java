package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeDrchronoOauth2 {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeDrchronoOauth2 withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}