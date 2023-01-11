package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveScoreCollaboratorSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOAuth2 oAuth2;
    public RemoveScoreCollaboratorSecurity withOAuth2(openapisdk.models.shared.SchemeOAuth2 oAuth2) {
        this.oAuth2 = oAuth2;
        return this;
    }
}