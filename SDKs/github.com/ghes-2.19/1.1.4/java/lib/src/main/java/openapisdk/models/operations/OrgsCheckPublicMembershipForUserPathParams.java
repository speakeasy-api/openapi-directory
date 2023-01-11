package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsCheckPublicMembershipForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public OrgsCheckPublicMembershipForUserPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public OrgsCheckPublicMembershipForUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}