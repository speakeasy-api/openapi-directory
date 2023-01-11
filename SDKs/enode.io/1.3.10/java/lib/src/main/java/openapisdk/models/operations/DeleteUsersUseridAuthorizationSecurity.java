package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUsersUseridAuthorizationSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeClientAccessToken clientAccessToken;
    public DeleteUsersUseridAuthorizationSecurity withClientAccessToken(openapisdk.models.shared.SchemeClientAccessToken clientAccessToken) {
        this.clientAccessToken = clientAccessToken;
        return this;
    }
}