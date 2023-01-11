package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersListFollowersForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public UsersListFollowersForUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}