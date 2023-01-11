package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsRemoveMemberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsRemoveMemberPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public OrgsRemoveMemberPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}