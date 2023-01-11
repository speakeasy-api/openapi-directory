package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsGetMembershipForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsGetMembershipForUserPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public OrgsGetMembershipForUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}