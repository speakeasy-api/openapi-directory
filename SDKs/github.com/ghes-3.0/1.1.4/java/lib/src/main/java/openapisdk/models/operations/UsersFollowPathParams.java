package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersFollowPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public UsersFollowPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}