package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersListFollowingForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public UsersListFollowingForUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}