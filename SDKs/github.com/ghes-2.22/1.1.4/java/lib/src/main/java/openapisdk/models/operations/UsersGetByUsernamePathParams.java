package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersGetByUsernamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public UsersGetByUsernamePathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}