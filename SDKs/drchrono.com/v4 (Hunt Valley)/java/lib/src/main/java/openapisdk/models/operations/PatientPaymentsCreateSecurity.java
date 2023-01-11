package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientPaymentsCreateSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeDrchronoOauth2 drchronoOauth2;
    public PatientPaymentsCreateSecurity withDrchronoOauth2(openapisdk.models.shared.SchemeDrchronoOauth2 drchronoOauth2) {
        this.drchronoOauth2 = drchronoOauth2;
        return this;
    }
}