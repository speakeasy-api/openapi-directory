package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamsUsernameHooksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GetTeamsUsernameHooksPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}