package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AmendmentsListSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeDrchronoOauth2 drchronoOauth2;
    public AmendmentsListSecurity withDrchronoOauth2(openapisdk.models.shared.SchemeDrchronoOauth2 drchronoOauth2) {
        this.drchronoOauth2 = drchronoOauth2;
        return this;
    }
}