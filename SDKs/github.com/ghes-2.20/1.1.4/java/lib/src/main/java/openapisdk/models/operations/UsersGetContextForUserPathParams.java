package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersGetContextForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public UsersGetContextForUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}