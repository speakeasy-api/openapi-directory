package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUsersUseridSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeClientAccessToken clientAccessToken;
    public DeleteUsersUseridSecurity withClientAccessToken(openapisdk.models.shared.SchemeClientAccessToken clientAccessToken) {
        this.clientAccessToken = clientAccessToken;
        return this;
    }
}