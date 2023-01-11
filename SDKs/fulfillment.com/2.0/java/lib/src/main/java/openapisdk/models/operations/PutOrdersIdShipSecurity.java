package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutOrdersIdShipSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeFdcAuth fdcAuth;
    public PutOrdersIdShipSecurity withFdcAuth(openapisdk.models.shared.SchemeFdcAuth fdcAuth) {
        this.fdcAuth = fdcAuth;
        return this;
    }
}