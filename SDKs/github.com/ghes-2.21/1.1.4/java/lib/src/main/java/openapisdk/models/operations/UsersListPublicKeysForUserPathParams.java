package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersListPublicKeysForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public UsersListPublicKeysForUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}