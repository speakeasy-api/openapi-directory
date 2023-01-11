package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamsUsernamePermissionsRepositoriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GetTeamsUsernamePermissionsRepositoriesPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}