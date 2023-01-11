package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersCheckBlockedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public UsersCheckBlockedPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}