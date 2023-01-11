package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersBlockPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public UsersBlockPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}