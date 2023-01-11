package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTeamsUsernameHooksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public PostTeamsUsernameHooksPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}