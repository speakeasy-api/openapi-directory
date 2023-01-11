package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamsUsernameFollowersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GetTeamsUsernameFollowersPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}