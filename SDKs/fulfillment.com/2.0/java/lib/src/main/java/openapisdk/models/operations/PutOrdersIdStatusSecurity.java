package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutOrdersIdStatusSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeFdcAuth fdcAuth;
    public PutOrdersIdStatusSecurity withFdcAuth(openapisdk.models.shared.SchemeFdcAuth fdcAuth) {
        this.fdcAuth = fdcAuth;
        return this;
    }
}