package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTeamsUsernameHooksUidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=uid")
    public String uid;
    public DeleteTeamsUsernameHooksUidPathParams withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public DeleteTeamsUsernameHooksUidPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}