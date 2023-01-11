package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersUsernameMembersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GetUsersUsernameMembersPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}