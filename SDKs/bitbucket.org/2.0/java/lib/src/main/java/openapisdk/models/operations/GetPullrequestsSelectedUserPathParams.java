package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPullrequestsSelectedUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=selected_user")
    public String selectedUser;
    public GetPullrequestsSelectedUserPathParams withSelectedUser(String selectedUser) {
        this.selectedUser = selectedUser;
        return this;
    }
}