package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersUnblockPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public UsersUnblockPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}