package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCertificatePdfSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeCertAuth certAuth;
    public GetCertificatePdfSecurity withCertAuth(openapisdk.models.shared.SchemeCertAuth certAuth) {
        this.certAuth = certAuth;
        return this;
    }
}