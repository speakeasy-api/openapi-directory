package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HeadSettingsOrganizationsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOAuth2 oAuth2;
    public HeadSettingsOrganizationsSecurity withOAuth2(openapisdk.models.shared.SchemeOAuth2 oAuth2) {
        this.oAuth2 = oAuth2;
        return this;
    }
}