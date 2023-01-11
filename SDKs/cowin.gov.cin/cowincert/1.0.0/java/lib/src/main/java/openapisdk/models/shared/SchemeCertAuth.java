package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeCertAuth {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeCertAuth withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}