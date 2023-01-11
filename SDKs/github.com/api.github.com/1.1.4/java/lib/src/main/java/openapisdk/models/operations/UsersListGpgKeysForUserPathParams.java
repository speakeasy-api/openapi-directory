package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersListGpgKeysForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public UsersListGpgKeysForUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}