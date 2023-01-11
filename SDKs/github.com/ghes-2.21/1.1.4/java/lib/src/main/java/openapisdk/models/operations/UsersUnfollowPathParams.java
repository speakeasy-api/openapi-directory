package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersUnfollowPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public UsersUnfollowPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}