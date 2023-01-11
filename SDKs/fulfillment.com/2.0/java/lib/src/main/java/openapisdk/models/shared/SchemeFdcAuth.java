package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeFdcAuth {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeFdcAuth withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}