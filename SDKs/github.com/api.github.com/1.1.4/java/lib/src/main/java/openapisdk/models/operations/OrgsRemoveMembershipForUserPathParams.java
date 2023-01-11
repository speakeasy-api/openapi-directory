package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsRemoveMembershipForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsRemoveMembershipForUserPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public OrgsRemoveMembershipForUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}