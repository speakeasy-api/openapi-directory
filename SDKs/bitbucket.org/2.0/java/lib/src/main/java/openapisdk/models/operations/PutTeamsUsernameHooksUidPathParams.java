package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTeamsUsernameHooksUidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=uid")
    public String uid;
    public PutTeamsUsernameHooksUidPathParams withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public PutTeamsUsernameHooksUidPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}