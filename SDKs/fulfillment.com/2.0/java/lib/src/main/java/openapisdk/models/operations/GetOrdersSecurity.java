package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrdersSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeFdcAuth fdcAuth;
    public GetOrdersSecurity withFdcAuth(openapisdk.models.shared.SchemeFdcAuth fdcAuth) {
        this.fdcAuth = fdcAuth;
        return this;
    }
}