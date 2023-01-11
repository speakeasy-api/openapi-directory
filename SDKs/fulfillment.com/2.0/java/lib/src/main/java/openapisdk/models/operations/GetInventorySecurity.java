package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInventorySecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeFdcAuth fdcAuth;
    public GetInventorySecurity withFdcAuth(openapisdk.models.shared.SchemeFdcAuth fdcAuth) {
        this.fdcAuth = fdcAuth;
        return this;
    }
}