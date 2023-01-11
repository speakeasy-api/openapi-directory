package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListOfDocumentsProvidedByAnIssuerIdSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauthsecurity oauthsecurity;
    public GetListOfDocumentsProvidedByAnIssuerIdSecurity withOauthsecurity(openapisdk.models.shared.SchemeOauthsecurity oauthsecurity) {
        this.oauthsecurity = oauthsecurity;
        return this;
    }
}